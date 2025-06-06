"use client"

// import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from 'lucide-react';
// import { Send }from 'lucide-react';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// s

const ContactSection = () => /* const [formData, setFormData] = useState<FormData>({*/ /*   name: '',*/ /*   email: '',*/ /*   message: ''*/ /* });*/ /* const [errors, setErrors] = useState<FormErrors>({});*/ /* const [isLoading, setIsLoading] = useState(false);*/ /* const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');*/ /* const validateForm = (): boolean => {*/ /*   const newErrors: FormErrors = {};*/ /*   if (!formData.name.trim()) {*/ /*     newErrors.name = 'Name is required';*/ /*   }*/ /*   if (!formData.email.trim()) {*/ /*     newErrors.email = 'Email is required';*/ /*   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {*/ /*     newErrors.email = 'Please enter a valid email address';*/ /*   }*/ /*   if (!formData.message.trim()) {*/ /*     newErrors.message = 'Message is required';*/ /*   }*/ /*   setErrors(newErrors);*/ /*   return Object.keys(newErrors).length === 0;*/ /* };*/ /* const handleSubmit = async (e: React.FormEvent) => {*/ /*   e.preventDefault();*/ /*   if (!validateForm()) {*/ /*     return;*/ /*   }*/ /*   setIsLoading(true);*/ /*   setSubmitStatus('idle');*/ /*   try {*/ /*     const response = await fetch('/api/contact', {*/ /*       method: 'POST',*/ /*       headers: {*/ /*         'Content-Type': 'application/json',*/ /*       },*/ /*       body: JSON.stringify(formData),*/ /*     });*/ /*     if (!response.ok) {*/ /*       throw new Error('Failed to send message');*/ /*     }*/ /*     setSubmitStatus('success');*/ /*     setFormData({ name: '', email: '', message: '' });*/ /*   } catch (error) {*/ /*     console.error('Error sending message:', error);*/ /*     setSubmitStatus('error');*/ /*   } finally {*/ /*     setIsLoading(false);*/ /*   }*/ /* };*/ /* const handleInputChange = (*/ /*   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>*/ /* ) => {*/ /*   const { name, value } = e.target;*/ /*   setFormData(prev => ({ ...prev, [name]: value }));*/ /*   // Clear error when user starts typing*/ /*   if (errors[name as keyof FormErrors]) {*/ /*     setErrors(prev => ({ ...prev, [name]: undefined }));*/ /*   }*/ /* };*/ (
  <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
    {/* <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-muted-foreground">
        Have a question or want to work together? Feel free to reach out!
      </p>
    </div> */}

    <div
     // className="grid md:grid-cols-2 gap-8"
    >
      {/* <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        aria-label="Your name"
                        aria-invalid={!!errors.name}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
      
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        aria-label="Your email address"
                        aria-invalid={!!errors.email}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
      
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        aria-label="Your message"
                        aria-invalid={!!errors.message}
                        className={`min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>
      
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          Sending...
                          <span className="animate-spin">⠋</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
      
                    {submitStatus === 'success' && (
                      <p className="text-green-600 text-center mt-4">
                        Message sent successfully!
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="text-red-500 text-center mt-4">
                        Failed to send message. Please try again.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card> */}

      <Card>
        <CardHeader>
          <CardTitle>Other Ways to Connect</CardTitle>
          <CardDescription>
            Feel free to reach out through any of these platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <a
              href="mailto:bendk1994@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" />
              <span>bendk1994@gmail.com</span>
            </a>

            <a
              href="https://github.com/Bendako"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              <span>Bendako</span>
            </a>

            <a
              href="https://www.linkedin.com/in/bendako/"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span>bendako</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default ContactSection;