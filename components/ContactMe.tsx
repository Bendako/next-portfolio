import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from 'lucide-react';
const ContactSection = () => (
  <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
    <div>
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