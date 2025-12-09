// "use client";
// import { useState, useEffect } from "react";
// import type React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Download,
//   CheckCircle,
//   ArrowRight,
//   X,
//   Mail,
//   Phone,
//   MessageSquare,
//   User,
//   MapPin,
//   TrendingUp,
//   ExternalLink,
//   Eye,
//   Play,
// } from "lucide-react";
// import { useModal } from "@/context/ModalContext";

// export default function GlobalModal() {
//   const { isOpen, config, closeModal } = useModal();
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     country: "",
//     experience: "",
//     message: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setIsSubmitted(true);

//       // Auto close after success
//       setTimeout(() => {
//         handleClose();
//       }, 3000);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleClose = () => {
//     if (!isLoading) {
//       closeModal();
//       setIsSubmitted(false);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         city: "",
//         country: "",
//         experience: "",
//         message: "",
//       });
//     }
//   };

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   // Get icon based on modal type
//   const getModalIcon = () => {
//     switch (config.type) {
//       case "results":
//         return <Eye className="w-8 h-8 text-white" />;
//       case "demo":
//         return <Play className="w-8 h-8 text-white" />;
//       case "contact":
//         return <Mail className="w-8 h-8 text-white" />;
//       default:
//         return <Download className="w-8 h-8 text-white" />;
//     }
//   };

//   // Get success message based on modal type
//   const getSuccessMessage = () => {
//     switch (config.type) {
//       case "results":
//         return {
//           title: "Access Granted!",
//           message:
//             "You now have access to our live trading results. Check your email for login credentials.",
//           actions: [
//             {
//               icon: <ExternalLink className="w-5 h-5" />,
//               text: "Access Dashboard",
//             },
//             { icon: <Mail className="w-5 h-5" />, text: "Check Email" },
//           ],
//         };
//       case "demo":
//         return {
//           title: "Demo Scheduled!",
//           message:
//             "Your personalized demo has been scheduled. Our expert will contact you shortly.",
//           actions: [
//             { icon: <Phone className="w-5 h-5" />, text: "Call Scheduled" },
//             { icon: <Mail className="w-5 h-5" />, text: "Confirmation Sent" },
//           ],
//         };
//       case "contact":
//         return {
//           title: "Message Sent!",
//           message:
//             "Thank you for contacting us. Our team will respond within 24 hours.",
//           actions: [
//             {
//               icon: <MessageSquare className="w-5 h-5" />,
//               text: "Message Received",
//             },
//             { icon: <Mail className="w-5 h-5" />, text: "Auto-Reply Sent" },
//           ],
//         };
//       default:
//         return {
//           title: "Download Started!",
//           message:
//             "Your AI trading robot download has begun. Check your email for setup instructions.",
//           actions: [
//             {
//               icon: <Download className="w-5 h-5" />,
//               text: "Download in Progress",
//             },
//             { icon: <Mail className="w-5 h-5" />, text: "Setup Guide Sent" },
//           ],
//         };
//     }
//   };

//   if (!isOpen) return null;

//   const successData = getSuccessMessage();

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//         onClick={handleClose}
//       ></div>

//       {/* Modal */}
//       <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="glass-white rounded-3xl shadow-blue-lg border border-gray-100 relative">
//           {/* Close Button */}
//           <button
//             onClick={handleClose}
//             disabled={isLoading}
//             className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-colors z-10 disabled:opacity-50"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           {/* Success State */}
//           {isSubmitted ? (
//             <div className="p-12 text-center">
//               <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
//               <h3 className="text-3xl font-bold text-green-600 mb-4">
//                 {successData.title}
//               </h3>
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 {successData.message}
//               </p>
//               <div className="flex items-center justify-center space-x-6">
//                 {successData.actions.map((action, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-2 text-green-600"
//                   >
//                     {action.icon}
//                     <span className="font-medium">{action.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="p-8">
//               {/* Header */}
//               <div className="text-center mb-8">
//                 <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   {getModalIcon()}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                   {config.title}
//                 </h3>
//                 <p className="text-gray-600">{config.subtitle}</p>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Name Field */}
//                 <div>
//                   <label
//                     htmlFor="modal-name"
//                     className="block text-gray-900 font-medium mb-2"
//                   >
//                     <User className="w-4 h-4 inline mr-2" />
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="modal-name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>

//                 {/* Email and Phone Row */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label
//                       htmlFor="modal-email"
//                       className="block text-gray-900 font-medium mb-2"
//                     >
//                       <Mail className="w-4 h-4 inline mr-2" />
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="modal-email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       placeholder="your@email.com"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="modal-phone"
//                       className="block text-gray-900 font-medium mb-2"
//                     >
//                       <Phone className="w-4 h-4 inline mr-2" />
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       id="modal-phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       placeholder="+1 (555) 123-4567"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* City and Country Row */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label
//                       htmlFor="modal-city"
//                       className="block text-gray-900 font-medium mb-2"
//                     >
//                       <MapPin className="w-4 h-4 inline mr-2" />
//                       City *
//                     </label>
//                     <input
//                       type="text"
//                       id="modal-city"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       placeholder="Your city"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="modal-country"
//                       className="block text-gray-900 font-medium mb-2"
//                     >
//                       <MapPin className="w-4 h-4 inline mr-2" />
//                       Country *
//                     </label>
//                     <input
//                       type="text"
//                       id="modal-country"
//                       name="country"
//                       value={formData.country}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       placeholder="Your country"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Trading Experience */}
//                 <div>
//                   <label
//                     htmlFor="modal-experience"
//                     className="block text-gray-900 font-medium mb-2"
//                   >
//                     <TrendingUp className="w-4 h-4 inline mr-2" />
//                     Trading Experience
//                   </label>
//                   <select
//                     id="modal-experience"
//                     name="experience"
//                     value={formData.experience}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                   >
//                     <option value="">Select your experience level</option>
//                     <option value="beginner">Beginner (0-1 years)</option>
//                     <option value="intermediate">
//                       Intermediate (1-3 years)
//                     </option>
//                     <option value="advanced">Advanced (3+ years)</option>
//                     <option value="expert">Expert (5+ years)</option>
//                   </select>
//                 </div>

//                 {/* Message Field */}
//                 <div>
//                   <label
//                     htmlFor="modal-message"
//                     className="block text-gray-900 font-medium mb-2"
//                   >
//                     <MessageSquare className="w-4 h-4 inline mr-2" />
//                     {config.type === "contact" ? "Message" : "Trading Goals"} *
//                   </label>
//                   <textarea
//                     id="modal-message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows={4}
//                     className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
//                     placeholder={
//                       config.type === "contact"
//                         ? "Tell us how we can help you..."
//                         : "Tell us about your trading goals and what you hope to achieve with automated trading..."
//                     }
//                     required
//                   ></textarea>
//                 </div>

//                 {/* Consent Checkbox */}
//                 <div className="flex items-start space-x-3">
//                   <input
//                     type="checkbox"
//                     id="modal-consent"
//                     className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                     required
//                   />
//                   <label
//                     htmlFor="modal-consent"
//                     className="text-gray-600 text-sm leading-relaxed"
//                   >
//                     I agree to receive communications from algopips
//                     including setup instructions, trading tips, and product
//                     updates. I understand I can unsubscribe at any time.
//                   </label>
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full btn-gradient text-white font-bold py-6 rounded-2xl text-lg shadow-blue-lg hover:shadow-blue disabled:opacity-50 disabled:cursor-not-allowed group transition-all duration-200"
//                 >
//                   {isLoading ? (
//                     <div className="flex items-center justify-center">
//                       <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
//                       Processing...
//                     </div>
//                   ) : (
//                     <div className="flex items-center justify-center">
//                       {config.type === "results" ? (
//                         <Eye className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
//                       ) : config.type === "demo" ? (
//                         <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
//                       ) : config.type === "contact" ? (
//                         <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
//                       ) : (
//                         <Download className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
//                       )}
//                       {config.buttonText}
//                       <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   )}
//                 </Button>

//                 {/* Security Notice */}
//                 <div className="text-center pt-4">
//                   <p className="text-gray-500 text-sm leading-relaxed">
//                     🔒 Your information is secure and encrypted. We respect your
//                     privacy and will never share your data with third parties.
//                   </p>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import {
  Download,
  CheckCircle,
  ArrowRight,
  X,
  Mail,
  Phone,
  MessageSquare,
  User,
  MapPin,
  TrendingUp,
  ExternalLink,
  Eye,
  Play,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function GlobalModal() {
  const { isOpen, config, closeModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    experience: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);

      // Auto close after success
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      closeModal();
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        country: "",
        experience: "",
        message: "",
      });
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Get icon based on modal type
  const getModalIcon = () => {
    switch (config.type) {
      case "results":
        return <Eye className="w-8 h-8 text-white" />;
      case "demo":
        return <Play className="w-8 h-8 text-white" />;
      case "contact":
        return <Mail className="w-8 h-8 text-white" />;
      default:
        return <Download className="w-8 h-8 text-white" />;
    }
  };

  // Get success message based on modal type
  const getSuccessMessage = () => {
    switch (config.type) {
      case "results":
        return {
          title: "Access Granted!",
          message:
            "You now have access to our live trading results. Check your email for login credentials.",
          actions: [
            {
              icon: <ExternalLink className="w-5 h-5" />,
              text: "Access Dashboard",
            },
            { icon: <Mail className="w-5 h-5" />, text: "Check Email" },
          ],
        };
      case "demo":
        return {
          title: "Demo Scheduled!",
          message:
            "Your personalized demo has been scheduled. Our expert will contact you shortly.",
          actions: [
            { icon: <Phone className="w-5 h-5" />, text: "Call Scheduled" },
            { icon: <Mail className="w-5 h-5" />, text: "Confirmation Sent" },
          ],
        };
      case "contact":
        return {
          title: "Message Sent!",
          message:
            "Thank you for contacting us. Our team will respond within 24 hours.",
          actions: [
            {
              icon: <MessageSquare className="w-5 h-5" />,
              text: "Message Received",
            },
            { icon: <Mail className="w-5 h-5" />, text: "Auto-Reply Sent" },
          ],
        };
      default:
        return {
          title: "Download Started!",
          message:
            "Your AI trading robot download has begun. Check your email for setup instructions.",
          actions: [
            {
              icon: <Download className="w-5 h-5" />,
              text: "Download in Progress",
            },
            { icon: <Mail className="w-5 h-5" />, text: "Setup Guide Sent" },
          ],
        };
    }
  };

  if (!isOpen) return null;

  const successData = getSuccessMessage();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-5xl border border-slate-100">
          <button
            onClick={handleClose}
            disabled={isLoading}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10 disabled:opacity-50"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="p-8 md:p-12 text-center">
              <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
                {successData.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                {successData.message}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                {successData.actions.map((action, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-green-600"
                  >
                    {action.icon}
                    <span className="font-medium">{action.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {config.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{config.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="modal-name"
                      className="block text-gray-900 font-medium mb-2 text-sm"
                    >
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-gray-900 font-medium mb-2 text-sm"
                    >
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="block text-gray-900 font-medium mb-2 text-sm"
                    >
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="modal-city"
                      className="block text-gray-900 font-medium mb-2 text-sm"
                    >
                      <MapPin className="w-4 h-4 inline mr-2" />
                      City *
                    </label>
                    <input
                      type="text"
                      id="modal-city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Your city"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-country"
                      className="block text-gray-900 font-medium mb-2 text-sm"
                    >
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Country *
                    </label>
                    <input
                      type="text"
                      id="modal-country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Your country"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-6 pt-2">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="modal-consent"
                      className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 shrink-0"
                      required
                    />
                    <label
                      htmlFor="modal-consent"
                      className="text-gray-600 text-xs md:text-sm leading-relaxed"
                    >
                      I agree to receive communications from algopips including
                      setup instructions, trading tips, and product updates. I
                      understand I can unsubscribe at any time.
                    </label>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full md:w-auto btn-gradient text-white font-bold px-8 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg shadow-blue-lg hover:shadow-blue disabled:opacity-50 disabled:cursor-not-allowed group transition-all duration-200"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          {config.type === "results" ? (
                            <Eye className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                          ) : config.type === "demo" ? (
                            <Play className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                          ) : config.type === "contact" ? (
                            <Mail className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                          ) : (
                            <Download className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                          )}
                          {config.buttonText}
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-400 text-xs leading-relaxed">
                      🔒 Your information is secure and encrypted. We respect
                      your privacy and will never share your data with third
                      parties.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
