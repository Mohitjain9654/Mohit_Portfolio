// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // Import emailjs

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ submitted: true, success: false, message: 'Sending message...' });

        // Email.js Service ID, Template IDs, and Public Key
        // IMPORTANT: Replace these with your actual IDs from Email.js dashboard
        const SERVICE_ID = 'service_92ljf1v'; // e.g., 'service_xxxxxx'
        const TEMPLATE_ID_TO_OWNER = 'template_8b4kak7'; // e.g., 'template_yyyyyy'
        const TEMPLATE_ID_AUTO_REPLY = 'template_kcm9y4c'; // e.g., 'template_zzzzzz'
        const PUBLIC_KEY = 'Ia6UQdfwEXudr2cuS'; // e.g., 'user_abcdef1234567890'

        // Parameters for the email template (must match variables in Email.js template)
        const templateParams = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            user_email: formData.email, // Use user_email for the user's email
            subject: formData.subject,
            message: formData.message,
            to_email: 'mohitjain965405@gmail.com' // Your receiving email address
        };

        try {
            // Send email to yourself (portfolio owner)
            const ownerResponse = await emailjs.send(SERVICE_ID, TEMPLATE_ID_TO_OWNER, templateParams, PUBLIC_KEY);
            console.log('Email to owner sent:', ownerResponse);

            // Send confirmation email to the user
            const userResponse = await emailjs.send(SERVICE_ID, TEMPLATE_ID_AUTO_REPLY, templateParams, PUBLIC_KEY);
            console.log('Confirmation email to user sent:', userResponse);

            if (ownerResponse.status === 200 && userResponse.status === 200) {
                setFormStatus({
                    submitted: true,
                    success: true,
                    message: 'Your message has been sent successfully! A confirmation email has been sent to your inbox.',
                });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                setFormStatus({
                    submitted: true,
                    success: false,
                    message: 'Failed to send one or both messages. Please try again.',
                });
            }
        } catch (error) {
            console.error('Email.js sending error:', error);
            setFormStatus({
                submitted: true,
                success: false,
                message: 'Network error or Email.js issue. Please try again later.',
            });
        }
    };

    return (
        <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-[57px]">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h2>
                    <p className="text-neutral-400 text-lg">Let's discuss your next project or just say hello!</p>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-12 lg:space-x-20">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h3 className="text-teal-400 font-bold text-2xl mb-6">Let's Connect</h3>
                        <p className="text-neutral-300 text-base leading-relaxed mb-8">
                            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center text-neutral-300">
                                <FaEnvelope className="text-teal-400 mr-3" size={20} />
                                <span className="text-base">mohitjain965405@gmail.com</span>
                            </div>
                            <div className="flex items-center text-neutral-300">
                                <FaMapMarkerAlt className="text-teal-400 mr-3" size={20} />
                                <span className="text-base">Indore, Madhya Pradesh, India</span>
                            </div>
                            <div className="flex items-center text-neutral-300">
                                <FaClock className="text-teal-400 mr-3" size={20} />
                                <span className="text-base">Response Time: Within 24 hours</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name *"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="bg-neutral-800 border border-neutral-700 text-white rounded-md p-3 focus:outline-none focus:border-teal-400"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name *"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="bg-neutral-800 border border-neutral-700 text-white rounded-md p-3 focus:outline-none focus:border-teal-400"
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-md p-3 focus:outline-none focus:border-teal-400"
                            />
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-md p-3 focus:outline-none focus:border-teal-400 appearance-none pr-8"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23a1a1aa' d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 0.75rem center',
                                    backgroundSize: '1.5em 1.5em',
                                }}
                            >
                                <option value="" disabled>Select a Subject *</option>
                                <option value="project_inquiry">Project Inquiry</option>
                                <option value="Job_inquiry">Job Inquiry</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="feedback">Feedback</option>
                                <option value="other">Other</option>
                            </select>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project or how I can help you... *"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-md p-3 focus:outline-none focus:border-teal-400 resize-y"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-md transition-colors"
                                disabled={formStatus.submitted && !formStatus.success}
                            >
                                {formStatus.submitted && !formStatus.success ? 'Sending...' : 'Send Message'}
                            </button>

                            {formStatus.submitted && (
                                <p className={`text-center mt-4 ${formStatus.success ? 'text-green-500' : 'text-red-500'}`}>
                                    {formStatus.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;