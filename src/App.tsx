import React from 'react';
import { Github, Twitter, Linkedin, Globe, Shield, Code2, Users, Rocket, ArrowRight, BookOpen, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to PHPOrbit 🚀
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering PHP Developers with Open-Source Tools
            </p>
            <a
              href="https://github.com/PHPOrbit"
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Explore Our Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            About PHPOrbit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            PHPOrbit is an open-source organization dedicated to creating innovative, reliable, and developer-friendly PHP packages. Our mission is to simplify PHP development, enhance security, and improve productivity for developers worldwide.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Packages
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Rocket className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">More Coming Soon!</h3>
              <p className="text-gray-600 mb-4">
                We're working on exciting new packages. Stay tuned for updates!
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Follow Updates <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why PHPOrbit Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose PHPOrbit?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Code2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Open Source and Free</h3>
              <p className="text-gray-600">Always free and open for everyone</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Community-Driven</h3>
              <p className="text-gray-600">Built by developers, for developers</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">High Coding Standards</h3>
              <p className="text-gray-600">Quality code you can trust</p>
            </div>
            <div className="text-center">
              <Rocket className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">Modern approaches to common problems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get Involved</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We welcome contributions from developers like you! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
          >
            Contribute Now
            <BookOpen className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with other developers, share ideas, and stay updated on our latest projects.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <MessageCircle className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
              <Twitter className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Packages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contribute</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/PHPOrbit" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">X</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discussions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p>© {new Date().getFullYear()} PHPOrbit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;