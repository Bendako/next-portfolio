import assert from 'node:assert/strict'
import test from 'node:test'
import { portfolioContent, founderLinks } from '../data/portfolio.ts'

const ids = (items, key) => items.map((item) => item[key])

test('locales expose matching, unique content identities', () => {
  const { he, en } = portfolioContent
  for (const [section, key] of [['work', 'workId'], ['engines', 'engineId'], ['process', 'stepId']]) {
    const hebrewIds = ids(he[section].items, key)
    assert.deepEqual(hebrewIds, ids(en[section].items, key))
    assert.equal(new Set(hebrewIds).size, hebrewIds.length)
  }
})

test('published project links are HTTPS and agree across translations', () => {
  for (const item of portfolioContent.he.work.items) {
    const translated = portfolioContent.en.work.items.find((entry) => entry.workId === item.workId)
    assert.ok(translated)
    for (const key of ['liveUrl', 'codeUrl']) {
      assert.equal(item[key], translated[key])
      if (item[key]) assert.equal(new URL(item[key]).protocol, 'https:')
    }
    assert.ok(item.codeUrl)
  }
  assert.match(founderLinks.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
})

test('every locale includes complete copy feedback and nonempty copy', () => {
  function check(value) {
    if (typeof value === 'string') assert.ok(value.trim().length)
    else if (Array.isArray(value)) value.forEach(check)
    else Object.values(value).forEach(check)
  }
  for (const content of Object.values(portfolioContent)) {
    check(content)
    assert.ok(content.contact.copiedNote)
    assert.ok(content.contact.copyError)
  }
})
