// import React, { useMemo, useState } from 'react';
// import {
//   Phone, Mail, MapPin, Clock, ChevronDown, Send, Users, Target, TrendingUp, Check
// } from 'lucide-react';
// import { Combobox, Listbox, Dialog } from '@headlessui/react';

// const countries = [
//   { code: 'US', name: 'United States', flag: '🇺🇸' },
//   { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
//   { code: 'CA', name: 'Canada', flag: '🇨🇦' },
//   { code: 'AU', name: 'Australia', flag: '🇦🇺' },
//   { code: 'DE', name: 'Germany', flag: '🇩🇪' },
//   { code: 'FR', name: 'France', flag: '🇫🇷' },
//   { code: 'IN', name: 'India', flag: '🇮🇳' },
//   { code: 'JP', name: 'Japan', flag: '🇯🇵' },
//   { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
//   { code: 'NL', name: 'Netherlands', flag: '🇳🇱' }
// ];

// const services = [
//   'Local SEO',
//   'Digital Marketing',
//   'Google Business Profile SEO',
//   'Keyword Research & Strategy',
//   'Reputation Management',
//   'Local Citations Management'
// ];

// function Contact() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobile: '',
//     // store the full object for Combobox
//     country: null,
//     service: '',
//     message: '',
//     company: '' // honeypot
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [touchedFields, setTouchedFields] = useState({});
//   const [errors, setErrors] = useState({});
//   const [countryQuery, setCountryQuery] = useState('');
//   const [successOpen, setSuccessOpen] = useState(false);

//   const filteredCountries = useMemo(() => {
//     if (countryQuery.trim() === '') return countries;
//     return countries.filter(c =>
//       `${c.name} ${c.code}`.toLowerCase().includes(countryQuery.toLowerCase())
//     );
//   }, [countryQuery]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouchedFields(prev => ({ ...prev, [name]: true }));
//     validateField(name, formData[name]);
//   };

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const validateField = (name, value) => {
//     let error = '';
//     switch (name) {
//       case 'firstName':
//         if (!value.trim()) error = 'First name is required';
//         break;
//       case 'lastName':
//         if (!value.trim()) error = 'Last name is required';
//         break;
//       case 'email':
//         if (!value.trim()) error = 'Email is required';
//         else if (!validateEmail(value)) error = 'Please enter a valid email address';
//         break;
//       case 'mobile':
//         if (!value.trim()) error = 'Mobile number is required';
//         break;
//       case 'country':
//         if (!value) error = 'Please select a country';
//         break;
//       case 'service':
//         if (!value) error = 'Please select a service';
//         break;
//       case 'message':
//         if (!value.trim()) error = 'Message is required';
//         break;
//       default:
//         break;
//     }
//     setErrors(prev => ({ ...prev, [name]: error }));
//     return error === '';
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const keys = Object.keys(formData).filter(k => k !== 'company'); // skip honeypot
//     keys.forEach(key => {
//       const val = key === 'country' ? formData.country : formData[key];
//       if (!validateField(key, val)) isValid = false;
//     });
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Honeypot check
//     if (formData.company) return;

//     const allTouched = {};
//     Object.keys(formData).forEach(k => {
//       if (k !== 'company') allTouched[k] = true;
//     });
//     setTouchedFields(allTouched);

//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     try {
//       await new Promise(res => setTimeout(res, 2000)); // simulate request
//       setSuccessOpen(true);
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         mobile: '',
//         country: null,
//         service: '',
//         message: '',
//         company: ''
//       });
//       setTouchedFields({});
//       setErrors({});
//       setCountryQuery('');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const getInputClasses = (fieldName) => {
//     const base = 'w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 placeholder-transparent bg-gray-50 focus:bg-white';
//     const hasError = touchedFields[fieldName] && errors[fieldName];
//     const borderColor = hasError ? 'border-red-500' : 'border-gray-200 focus:border-blue-600';
//     return `${base} ${borderColor}`;
//   };

//   const getLabelClasses = (fieldName) => {
//     const hasError = touchedFields[fieldName] && errors[fieldName];
//     const labelColor = hasError ? 'text-red-500' : 'text-blue-600';
//     return `absolute left-4 -top-2.5 bg-white px-2 text-sm ${labelColor} font-medium peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:${labelColor} peer-focus:text-sm transition-all duration-300`;
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 shadow-xl items-stretch rounded-xl overflow-hidden">
//             {/* Contact Form */}
//             <div className="bg-white p-8 lg:p-12 flex flex-col">
//               <div className="mb-8">
//                 <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                   Get Your <span className="text-blue-600">Free SEO Consultation</span>
//                 </h2>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Partner with us to boost your local search rankings and achieve exceptional results in the digital landscape.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col" noValidate>
//                 {/* Honeypot */}
//                 <div className="hidden" aria-hidden="true">
//                   <label htmlFor="company">Company</label>
//                   <input
//                     id="company"
//                     type="text"
//                     name="company"
//                     autoComplete="off"
//                     tabIndex={-1}
//                     value={formData.company}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="space-y-6 flex-1">
//                   {/* Name Fields */}
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="relative group">
//                       <input
//                         id="firstName"
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         onBlur={handleBlur}
//                         className={`${getInputClasses('firstName')} peer`}
//                         placeholder="First Name"
//                         autoComplete="given-name"
//                         enterKeyHint="next"
//                         aria-invalid={touchedFields.firstName && !!errors.firstName}
//                         aria-describedby={touchedFields.firstName && errors.firstName ? 'firstName-error' : undefined}
//                         required
//                       />
//                       <label className={getLabelClasses('firstName')} htmlFor="firstName">
//                         First Name*
//                       </label>
//                       {touchedFields.firstName && errors.firstName && (
//                         <p id="firstName-error" className="text-red-500 text-xs mt-1">{errors.firstName}</p>
//                       )}
//                     </div>

//                     <div className="relative group">
//                       <input
//                         id="lastName"
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         onBlur={handleBlur}
//                         className={`${getInputClasses('lastName')} peer`}
//                         placeholder="Last Name"
//                         autoComplete="family-name"
//                         enterKeyHint="next"
//                         aria-invalid={touchedFields.lastName && !!errors.lastName}
//                         aria-describedby={touchedFields.lastName && errors.lastName ? 'lastName-error' : undefined}
//                         required
//                       />
//                       <label className={getLabelClasses('lastName')} htmlFor="lastName">
//                         Last Name*
//                       </label>
//                       {touchedFields.lastName && errors.lastName && (
//                         <p id="lastName-error" className="text-red-500 text-xs mt-1">{errors.lastName}</p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="relative group">
//                     <input
//                       id="email"
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       className={`${getInputClasses('email')} peer`}
//                       placeholder="Email Address"
//                       autoComplete="email"
//                       enterKeyHint="next"
//                       aria-invalid={touchedFields.email && !!errors.email}
//                       aria-describedby={touchedFields.email && errors.email ? 'email-error' : undefined}
//                       required
//                     />
//                     <label className={getLabelClasses('email')} htmlFor="email">
//                       Email Address*
//                     </label>
//                     {touchedFields.email && errors.email && (
//                       <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>
//                     )}
//                   </div>

//                   {/* Country (Headless UI Combobox) */}
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="relative">
//                       <Combobox
//                         value={formData.country}
//                         onChange={(val) => {
//                           setFormData(prev => ({ ...prev, country: val }));
//                           if (errors.country) setErrors(prev => ({ ...prev, country: '' }));
//                         }}
//                       >
//                         <div className="relative">
//                           <Combobox.Input
//                             id="country"
//                             className={`${getInputClasses('country')} pr-10`}
//                             displayValue={(c) => c ? `${c.flag} ${c.name}` : ''}
//                             onChange={(e) => setCountryQuery(e.target.value)}
//                             onBlur={() => {
//                               setTouchedFields(prev => ({ ...prev, country: true }));
//                               validateField('country', formData.country);
//                             }}
//                             placeholder="Select Country"
//                             aria-invalid={touchedFields.country && !!errors.country}
//                             aria-describedby={touchedFields.country && errors.country ? 'country-error' : undefined}
//                             required
//                           />
//                           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-3">
//                             <ChevronDown size={18} className="text-gray-400" />
//                           </Combobox.Button>
//                         </div>
//                         {filteredCountries.length > 0 && (
//                           <Combobox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
//                             {filteredCountries.map((c) => (
//                               <Combobox.Option
//                                 key={c.code}
//                                 value={c}
//                                 className={({ active }) =>
//                                   `cursor-pointer select-none px-4 py-2 flex items-center gap-2 ${active ? 'bg-blue-50 text-blue-900' : 'text-gray-900'}`
//                                 }
//                               >
//                                 {({ selected }) => (
//                                   <>
//                                     <span className="text-lg">{c.flag}</span>
//                                     <span className="flex-1">{c.name}</span>
//                                     {selected && <Check size={16} className="text-blue-600" />}
//                                   </>
//                                 )}
//                               </Combobox.Option>
//                             ))}
//                           </Combobox.Options>
//                         )}
//                       </Combobox>
//                       <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-blue-600 font-medium" htmlFor="country">
//                         Country*
//                       </label>
//                       {touchedFields.country && errors.country && (
//                         <p id="country-error" className="text-red-500 text-xs mt-1">{errors.country}</p>
//                       )}
//                     </div>

//                     {/* Mobile */}
//                     <div className="relative group">
//                       <input
//                         id="mobile"
//                         type="tel"
//                         name="mobile"
//                         value={formData.mobile}
//                         onChange={handleInputChange}
//                         onBlur={handleBlur}
//                         className={`${getInputClasses('mobile')} peer`}
//                         placeholder="Mobile Number"
//                         autoComplete="tel"
//                         inputMode="tel"
//                         enterKeyHint="next"
//                         aria-invalid={touchedFields.mobile && !!errors.mobile}
//                         aria-describedby={touchedFields.mobile && errors.mobile ? 'mobile-error' : undefined}
//                         required
//                       />
//                       <label className={getLabelClasses('mobile')} htmlFor="mobile">
//                         Mobile Number*
//                       </label>
//                       {touchedFields.mobile && errors.mobile && (
//                         <p id="mobile-error" className="text-red-500 text-xs mt-1">{errors.mobile}</p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Service (Headless UI Listbox) */}
//                   <div className="relative">
//                     <Listbox
//                       value={formData.service}
//                       onChange={(val) => {
//                         setFormData(prev => ({ ...prev, service: val }));
//                         if (errors.service) setErrors(prev => ({ ...prev, service: '' }));
//                       }}
//                     >
//                       <div className="relative">
//                         <Listbox.Button
//                           id="service"
//                           className={`${getInputClasses('service')} appearance-none text-left pr-10`}
//                           onBlur={() => {
//                             setTouchedFields(prev => ({ ...prev, service: true }));
//                             validateField('service', formData.service);
//                           }}
//                           aria-invalid={touchedFields.service && !!errors.service}
//                           aria-describedby={touchedFields.service && errors.service ? 'service-error' : undefined}
//                         >
//                           {formData.service || 'Select Service'}
//                           <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                         </Listbox.Button>
//                         <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
//                           {services.map((svc) => (
//                             <Listbox.Option
//                               key={svc}
//                               value={svc}
//                               className={({ active }) =>
//                                 `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-50 text-blue-900' : 'text-gray-900'}`
//                               }
//                             >
//                               {({ selected }) => (
//                                 <div className="flex items-center gap-2">
//                                   {selected && <Check size={16} className="text-blue-600" />}
//                                   <span>{svc}</span>
//                                 </div>
//                               )}
//                             </Listbox.Option>
//                           ))}
//                         </Listbox.Options>
//                       </div>
//                     </Listbox>
//                     <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-blue-600 font-medium" htmlFor="service">
//                       Service Required*
//                     </label>
//                     {touchedFields.service && errors.service && (
//                       <p id="service-error" className="text-red-500 text-xs mt-1">{errors.service}</p>
//                     )}
//                   </div>

//                   {/* Message */}
//                   <div className="relative group">
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       rows={4}
//                       className={`${getInputClasses('message')} resize-none peer`}
//                       placeholder="Tell us about your SEO goals"
//                       enterKeyHint="send"
//                       aria-invalid={touchedFields.message && !!errors.message}
//                       aria-describedby={touchedFields.message && errors.message ? 'message-error' : undefined}
//                       required
//                     />
//                     <label className={getLabelClasses('message')} htmlFor="message">
//                       Tell us about your SEO goals*
//                     </label>
//                     {touchedFields.message && errors.message && (
//                       <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="mt-auto pt-6">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send size={20} />
//                         Get Free SEO Consultation
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>

//             {/* Information Section */}
//             <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 lg:p-12 flex flex-col">
//               <div className="mb-12">
//                 <h3 className="text-3xl lg:text-4xl font-bold mb-6">
//                   Ready to <span className="text-blue-200">Dominate</span> Local Search?
//                 </h3>
//                 <p className="text-blue-100 text-lg leading-relaxed mb-8">
//                   Jumpstart your local SEO success in 3 easy steps and watch your business rank higher in search results.
//                 </p>
//               </div>

//               <div className="space-y-8 mb-12 flex-1">
//                 <div className="flex gap-6 group">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-blue-400 transition-colors duration-300">
//                     1
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
//                       <Users size={24} className="text-blue-200" />
//                       Contact Us
//                     </h4>
//                     <p className="text-blue-100 leading-relaxed">
//                       Fill out our contact form, and we'll be in touch with you soon to learn more about your local SEO goals.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-6 group">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-blue-400 transition-colors duration-300">
//                     2
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
//                       <Target size={24} className="text-blue-200" />
//                       SEO Strategy Development
//                     </h4>
//                     <p className="text-blue-100 leading-relaxed">
//                       Our local SEO experts will analyze your business and create a data-driven strategy to boost your local rankings.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-6 group">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-blue-400 transition-colors duration-300">
//                     3
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
//                       <TrendingUp size={24} className="text-blue-200" />
//                       Watch Your Rankings Soar
//                     </h4>
//                     <p className="text-blue-100 leading-relaxed">
//                       See increased visibility, more local customers, and higher revenue as your business dominates local search results.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Information */}
//               <div className="border-t border-blue-500 pt-8 mt-auto">
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div>
//                     <h5 className="text-lg font-bold text-blue-200 mb-4">Get In Touch</h5>
//                     <div className="space-y-3">
//                       <div className="flex items-center gap-3 text-blue-100">
//                         <Phone size={18} />
//                         <span>(555) 123-4567</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-blue-100">
//                         <Mail size={18} />
//                         <span>hello@starwaywebdigital.com</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-blue-100">
//                         <MapPin size={18} />
//                         <span>123 Digital Ave, Suite 100</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <h5 className="text-lg font-bold text-blue-200 mb-4">Business Hours</h5>
//                     <div className="flex items-center gap-3 text-blue-100">
//                       <Clock size={18} />
//                       <span>Mon-Fri, 9:00am - 6:00pm</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Success Dialog (Headless UI) */}
//             <Dialog open={successOpen} onClose={setSuccessOpen} className="relative z-50">
//               <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
//               <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
//                 <Dialog.Panel className="max-w-md w-full space-y-4 rounded-2xl bg-white p-6 shadow-xl">
//                   <Dialog.Title className="text-xl font-bold text-gray-900">Message sent</Dialog.Title>
//                   <Dialog.Description className="text-gray-600">
//                     Thank you! Your message has been sent successfully.
//                   </Dialog.Description>
//                   <div className="flex justify-end">
//                     <button
//                       onClick={() => setSuccessOpen(false)}
//                       className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </Dialog.Panel>
//               </div>
//             </Dialog>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
  



import React, { useMemo, useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, ChevronDown, Send, Users, Target, TrendingUp, Check
} from 'lucide-react';
import { 
  Combobox, 
  Listbox, 
  Dialog, 
  Field, 
  Label, 
  Input, 
  Textarea, 
  Description,
  Fieldset,
  Legend
} from '@headlessui/react';

const countries = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' }
];

const services = [
  'Local SEO',
  'Digital Marketing',
  'Google Business Profile SEO',
  'Keyword Research & Strategy',
  'Reputation Management',
  'Local Citations Management',
   'Local Citations Management',
    'Local Citations Management'
];

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    country: null, // store the full object for Combobox
    service: '',
    message: '',
    company: '' // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [countryQuery, setCountryQuery] = useState('');
  const [successOpen, setSuccessOpen] = useState(false);

  const filteredCountries = useMemo(() => {
    if (countryQuery.trim() === '') return countries;
    return countries.filter(c =>
      `${c.name} ${c.code}`.toLowerCase().includes(countryQuery.toLowerCase())
    );
  }, [countryQuery]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'firstName':
        if (!value.trim()) error = 'First name is required';
        break;
      case 'lastName':
        if (!value.trim()) error = 'Last name is required';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!validateEmail(value)) error = 'Please enter a valid email address';
        break;
      case 'mobile':
        if (!value.trim()) error = 'Mobile number is required';
        break;
      case 'country':
        if (!value) error = 'Please select a country';
        break;
      case 'service':
        if (!value) error = 'Please select a service';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const validateForm = () => {
    let isValid = true;
    const keys = Object.keys(formData).filter(k => k !== 'company'); // skip honeypot
    keys.forEach(key => {
      const val = key === 'country' ? formData.country : formData[key];
      if (!validateField(key, val)) isValid = false;
    });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.company) return;

    const allTouched = {};
    Object.keys(formData).forEach(k => {
      if (k !== 'company') allTouched[k] = true;
    });
    setTouchedFields(allTouched);

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise(res => setTimeout(res, 2000)); // simulate request
      setSuccessOpen(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        country: null,
        service: '',
        message: '',
        company: ''
      });
      setTouchedFields({});
      setErrors({});
      setCountryQuery('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClasses = (fieldName) => {
    const base = 'w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white data-[focus]:bg-white';
    const hasError = touchedFields[fieldName] && errors[fieldName];
    const borderColor = hasError ? 'border-red-500 data-[focus]:border-red-500' : 'border-gray-200 data-[focus]:border-blue-600';
    return `${base} ${borderColor}`;
  };

  const getLabelClasses = (fieldName) => {
    const hasError = touchedFields[fieldName] && errors[fieldName];
    const labelColor = hasError ? 'text-red-500' : 'text-blue-600';
    return `block text-sm font-medium mb-2 ${labelColor}`;
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 shadow-xl items-stretch rounded-xl overflow-hidden">
            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 flex flex-col">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Get Your <span className="text-blue-600">Free SEO Consultation</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Partner with us to boost your local search rankings and achieve exceptional results in the digital landscape.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col" noValidate>
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    id="company"
                    type="text"
                    name="company"
                    autoComplete="off"
                    tabIndex={-1}
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <Fieldset className="space-y-6 flex-1">
                  <Legend className="sr-only">Contact Information</Legend>
                  
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field>
                      <Label className={getLabelClasses('firstName')}>
                        First Name*
                      </Label>
                      <Input
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClasses('firstName')}
                        autoComplete="given-name"
                        data-invalid={touchedFields.firstName && !!errors.firstName}
                      />
                      {touchedFields.firstName && errors.firstName && (
                        <Description className="text-red-500 text-xs mt-1">
                          {errors.firstName}
                        </Description>
                      )}
                    </Field>

                    <Field>
                      <Label className={getLabelClasses('lastName')}>
                        Last Name*
                      </Label>
                      <Input
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClasses('lastName')}
                        autoComplete="family-name"
                        data-invalid={touchedFields.lastName && !!errors.lastName}
                      />
                      {touchedFields.lastName && errors.lastName && (
                        <Description className="text-red-500 text-xs mt-1">
                          {errors.lastName}
                        </Description>
                      )}
                    </Field>
                  </div>

                  {/* Email */}
                  <Field>
                    <Label className={getLabelClasses('email')}>
                      Email Address*
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getInputClasses('email')}
                      autoComplete="email"
                      data-invalid={touchedFields.email && !!errors.email}
                    />
                    {touchedFields.email && errors.email && (
                      <Description className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </Description>
                    )}
                  </Field>

                  {/* Country & Mobile */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field>
                      <Label className={getLabelClasses('country')}>
                        Country*
                      </Label>
                      <Combobox
                        value={formData.country}
                        onChange={(val) => {
                          setFormData(prev => ({ ...prev, country: val }));
                          if (errors.country) setErrors(prev => ({ ...prev, country: '' }));
                        }}
                      >
                        <div className="relative">
                          <Combobox.Input
                            className={`${getInputClasses('country')} pr-10`}
                            displayValue={(c) => c ? `${c.flag} ${c.name}` : ''}
                            onChange={(e) => setCountryQuery(e.target.value)}
                            onBlur={() => {
                              setTouchedFields(prev => ({ ...prev, country: true }));
                              validateField('country', formData.country);
                            }}
                            placeholder="Select Country"
                            data-invalid={touchedFields.country && !!errors.country}
                          />
                          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <ChevronDown size={18} className="text-gray-400" />
                          </Combobox.Button>
                        </div>
                        {filteredCountries.length > 0 && (
                          <Combobox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
                            {filteredCountries.map((c) => (
                              <Combobox.Option
                                key={c.code}
                                value={c}
                                className={({ active }) =>
                                  `cursor-pointer select-none px-4 py-2 flex items-center gap-2 ${
                                    active ? 'bg-blue-50 text-blue-900' : 'text-gray-900'
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span className="text-lg">{c.flag}</span>
                                    <span className="flex-1">{c.name}</span>
                                    {selected && <Check size={16} className="text-blue-600" />}
                                  </>
                                )}
                              </Combobox.Option>
                            ))}
                          </Combobox.Options>
                        )}
                      </Combobox>
                      {touchedFields.country && errors.country && (
                        <Description className="text-red-500 text-xs mt-1">
                          {errors.country}
                        </Description>
                      )}
                    </Field>

                    <Field>
                      <Label className={getLabelClasses('mobile')}>
                        Mobile Number*
                      </Label>
                      <Input
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClasses('mobile')}
                        autoComplete="tel"
                        data-invalid={touchedFields.mobile && !!errors.mobile}
                      />
                      {touchedFields.mobile && errors.mobile && (
                        <Description className="text-red-500 text-xs mt-1">
                          {errors.mobile}
                        </Description>
                      )}
                    </Field>
                  </div>

                  {/* Service Selection */}
                  <Field>
                    <Label className={getLabelClasses('service')}>
                      Service Required*
                    </Label>
                    <Listbox
                      value={formData.service}
                      onChange={(val) => {
                        setFormData(prev => ({ ...prev, service: val }));
                        if (errors.service) setErrors(prev => ({ ...prev, service: '' }));
                      }}
                    >
                      <div className="relative">
                        <Listbox.Button
                          className={`${getInputClasses('service')} text-left pr-10`}
                          onBlur={() => {
                            setTouchedFields(prev => ({ ...prev, service: true }));
                            validateField('service', formData.service);
                          }}
                          data-invalid={touchedFields.service && !!errors.service}
                        >
                          <span className={formData.service ? 'text-gray-900' : 'text-gray-400'}>
                            {formData.service || 'Select Service'}
                          </span>
                          <ChevronDown 
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                            size={20} 
                          />
                        </Listbox.Button>
                        <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
                          {services.map((svc) => (
                            <Listbox.Option
                              key={svc}
                              value={svc}
                              className={({ active }) =>
                                `cursor-pointer select-none px-4 py-2 ${
                                  active ? 'bg-blue-50 text-blue-900' : 'text-gray-900'
                                }`
                              }
                            >
                              {({ selected }) => (
                                <div className="flex items-center gap-2">
                                  {selected && <Check size={16} className="text-blue-600" />}
                                  <span className={selected ? 'ml-0' : 'ml-6'}>{svc}</span>
                                </div>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                    {touchedFields.service && errors.service && (
                      <Description className="text-red-500 text-xs mt-1">
                        {errors.service}
                      </Description>
                    )}
                  </Field>

                  {/* Message */}
                  <Field>
                    <Label className={getLabelClasses('message')}>
                      Tell us about your SEO goals*
                    </Label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      rows={4}
                      className={`${getInputClasses('message')} resize-none`}
                      data-invalid={touchedFields.message && !!errors.message}
                    />
                    {touchedFields.message && errors.message && (
                      <Description className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </Description>
                    )}
                  </Field>
                </Fieldset>

                {/* Submit Button */}
                <div className="mt-auto pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Get Free SEO Consultation
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Information Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 lg:p-12 flex flex-col">
              <div className="mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to <span className="text-blue-200">Dominate</span> Local Search?
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Jumpstart your local SEO success in 3 easy steps and watch your business rank higher in search results.
                </p>
              </div>

              <div className="space-y-8 mb-12 flex-1">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-blue-400 transition-colors duration-300">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                      <Users size={24} className="text-blue-200" />
                      Contact Us
                    </h4>
                    <p className="text-blue-100 leading-relaxed">
                      Fill out our contact form, and we'll be in touch with you soon to learn more about your local SEO goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-blue-400 transition-colors duration-300">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                      <Target size={24} className="text-blue-200" />
                      SEO Strategy Development
                    </h4>
                    <p className="text-blue-100 leading-relaxed">
                      Our local SEO experts will analyze your business and create a data-driven strategy to boost your local rankings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-blue-400 transition-colors duration-300">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                      <TrendingUp size={24} className="text-blue-200" />
                      Watch Your Rankings Soar
                    </h4>
                    <p className="text-blue-100 leading-relaxed">
                      See increased visibility, more local customers, and higher revenue as your business dominates local search results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-blue-500 pt-8 mt-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-bold text-blue-200 mb-4">Get In Touch</h5>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-blue-100">
                        <Phone size={18} />
                        <span>(555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3 text-blue-100">
                        <Mail size={18} />
                        <span>hello@starwaywebdigital.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-blue-100">
                        <MapPin size={18} />
                        <span>123 Digital Ave, Suite 100</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold text-blue-200 mb-4">Business Hours</h5>
                    <div className="flex items-center gap-3 text-blue-100">
                      <Clock size={18} />
                      <span>Mon-Fri, 9:00am - 6:00pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Dialog */}
            <Dialog open={successOpen} onClose={setSuccessOpen} className="relative z-50">
              <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
              <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel className="max-w-md w-full space-y-4 rounded-2xl bg-white p-6 shadow-xl">
                  <Dialog.Title className="text-xl font-bold text-gray-900">
                    Message sent
                  </Dialog.Title>
                  <Dialog.Description className="text-gray-600">
                    Thank you! Your message has been sent successfully.
                  </Dialog.Description>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setSuccessOpen(false)}
                      className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
