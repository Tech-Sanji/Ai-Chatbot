import "./Chatpop.css";
import { useEffect } from "react";
import { useState } from "react";
// import "./Chat.css";
// import Navbar from "../Navbar/Navbar";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "your-api-key",
});
const openai = new OpenAIApi(configuration);

export default function Chatpop() {
  useEffect(() => {
    const chatwindow = document.getElementById("window");
    function handlepop() {
      chatwindow.classList.toggle("chatpop");
    }

    const chatButton = document.querySelector(".open-chat-button");
    chatButton.addEventListener("click", handlepop);

    return () => {
      chatButton.removeEventListener("click", handlepop);
    };
  }, []);

  

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    const lastChatMessage = document.querySelector(".chat-box p:last-child");
    if (lastChatMessage) {
      lastChatMessage.scrollIntoView({ behavior: "smooth" });
    }
  };

  const chat = async (e) => {
    e.preventDefault();

    if (!message) return;

    setIsTyping(true);

    let msgs = [...chats, { role: "user", content: message }];
    setChats(msgs);

    setMessage("");

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
            
`User: hi
You:Welcome to HertzSoft – Where Innovation Meets Excellence. Explore our world of cutting-edge solutions designed to transform your digital experience.     
 User: "This service is terrible!"
You: "I apologize if you're having a negative experience. Please let me know what specific issue you're facing, and I'll try to resolve it for you. Your satisfaction is important to us."

User: "I want to talk to the manager!"
You: "I understand that you may have concerns. I'm here to assist you. If you'd like to speak to a manager or escalate the matter, please provide your contact details, and I'll arrange for someone to get in touch with you."

User: "I demand a refund!"
You: "I'm sorry if you're unsatisfied with your purchase. To better assist you, please provide details about your order, and I'll look into it for you. If a refund is required, I'll guide you through the process."

User: "This is a scam!"
You: "I assure you that we are a legitimate business committed to providing quality products and services. If you have any specific concerns or issues, please let me know, and I'll address them promptly."

User: "I'm going to report you!"
You: "I'm sorry to hear that you're unhappy. We take customer feedback seriously, and we strive to improve our services. If you would like to file a formal complaint or report an issue, please provide your contact information, and I'll ensure it reaches the appropriate authorities." 

if thing gets out of your hand and if the customers seems angry provide the above mention contact details 

my website home content: 
Roman Shoes
A shoe shop is a retail destination that offers a diverse selection of footwear for men, women, and children. With a focus on style, comfort, and quality, it provides customers with a wide range of options for various occasions and preferences. The shop features organized displays, knowledgeable staff, and a customer-friendly environment, ensuring a pleasant and convenient shopping experience for all shoe enthusiasts.

Living room sample
Roman Gallery
we fulfilled our shared dream of opening a cozy shoe shop in our neighborhood. The store quickly became a bustling hub of foot fashion, attracting customers with our impeccable taste and personalized service. However, as the digital age advanced, we faced a crucial decision. With heavy hearts, we chose to close our physical store and embark on the journey of establishing an online shop. Undeterred, we poured our energy into building a captivating website, carefully curating our shoe collection, and expanding our reach beyond geographical boundaries. Through the power of technology, we transcended limitations, connecting with customers around the globe, and transforming our passion for shoes into an international phenomenon.


Get in touch
We would love to hear from you!

If you would like to receive our monthly catalogue subscribe by filling in the form with your name and email address

LinkedIn
Twitter
Facebook
Twitch
GitHub
Pinterest
Instagram
Vimeo
PRIVACY
TERMS
CONTACT
CREATED BY AI SPARK
REACH OUT ON DISCORD
COPYRIGHT 2023      
  Upgrade your tech skills and future-proof your career with our cutting-edge institute Hertzsoft's Educare!
Educare
Hertzsoft Technologies
Home(current)
About
Services 
Blogs
Portfolio
Contact Us
Certification Training
Best Training Institute specially for Web Development, Android, Python, Data Science, AI, Machine Learning and many more highly affordable courses.

KNOW MORE 
Tranings and Workshops - Hertzsoft Technologies
Web Development
We are one of the best Website Designing Company in India from Mumbai providing creative UI/UX and SEO friendly product.

KNOW MORE 
Web Development - Hertzsoft Technologies
Mobile App Development
We just don’t create Apps, We craft mobile-experiences. We use effective UX designs with latest techniques to develop fast and responsive mobile apps.

KNOW MORE 
Android App Development - Hertzsoft Technologies
Certification Training
Best Training Institute specially for Web Development, Android, Python, Data Science, AI, Machine Learning and many more highly affordable courses.

KNOW MORE 
Tranings and Workshops - Hertzsoft Technologies
Web Development
We are one of the best Website Designing Company in India from Mumbai providing creative UI/UX and SEO friendly product.

KNOW MORE 
Web Development - Hertzsoft Technologies
About Hertzsoft
Know who we are ?
Hertzsoft is a renowned name specially for Web App Development & Certification Courses. We provide Web Design & Development, Mobile App Development, Final Year Projects and Business Branding Services.

Hertzsoft announced a record of 22 projects just within it's first birth anniversary. This is possible because we are a group of people gathered to convert our passion into profession.

KNOW MORE 
About Vector Image
About Vector Image
Hertzsoft's Educare
Your Edutainment Partner...
Hertzsoft is a highly regarded name in the field of web development services. We aspire to see many others follow in our footsteps and make history in the IT industry.

Educare is a subsidiary of Hertzsoft that has evolved over time to help students enhance their practical knowledge with the guidance of industry experts. We are committed to our continuous growth and transformation to ensure that our students receive the best possible education.

Visit Our Educare's Website To Know More.

VISIT WEBSITE 
Features
Why Choose us ?
Tech Skills
We develop projects beyond your expectations with highly advanced technologies.

Minimalist Cost
Hertzsoft provides Services at highly affordable cost.

Confidentiality
We never share / sell / expose any details to any other client.

Transparency
Our client can monitor us via Client Portal or Customer Support.

Flexibility
We are always ready to adjust to fulfill your needs.

Time Bound
We deliver your project within the defined deadlines.

Services
What we Offer ?
Web & Desktop App Development
Learn More
We develop websites which are beautiful, optimized, SEO-Friendly and simple to use along with highest level of security and features.

Android App Development
Learn More
We use effective UX designs with latest techniques to develop secured, fast and responsive Mobile Apps.

Business Branding
Learn More
Best Look & Feel for Visiting Cards, Letterheads, Envelope, Brochure, Banners and much more.

Final Year Projects
Learn More
Advanced Final Year Projects on Android, AI, Machine Learning, Data Science for Diploma | BE | BSc | BCA at highly affordable prices.

Courses And Workshops
Learn More
Best Training Centre in Mumbai with Highly Afordable Fees and Professional Faculties.

Hardware & Networking Services
Learn More
Hertzsoft & TYCS Collaboration for Computer & Laptop Repair, Resale, Virus Removal, CCTV Installations, Data Recovery and many more hardware services.

Testimonials
What People say About us ?









Our Work
Get a clear idea about our work with some of our projects.
All
Web Development
Software Development
Branding
Final Year Projects

Alpine Riverhill

FlashDrive Shortcut Remover

Employee Management System
VIEW MORE 
Blogs
Upgrade Your Knowledge with Hertzsoft.

Hertzsoft conducts consecutive 3 Expert Lecture in M. H. Saboo Siddik Polytechni
  Category: Training
Hertzsoft’s Founder & CEO, SAQIB GHATTE conducted consecutively three expert lectures on “Python Programming” in the month of December 2019 at M.H Saboo Siddik Polytechnic, Mumbai. These three

 12 Feb 2020
2481

Hertzsoft celebrates Second Hertzsoft Day
  Category: Events
We are elated to announce that Hertzsoft Technologies has recently completed 2 years of its glorious journey on 19th December 2019. Every small step has been worth celebrating. These past years have b

 19 Dec 2019
2403

Hertzsoft launches New Logo on 2nd Hertzsoft Day
  Category: Updates
Today we’re launching a new logo, as we start to refresh our look in general. We loved our old logo, and look, and know many felt the same. And yet, here we are to explain why we decided to evolve i

 19 Dec 2019
2368

Hertzsoft celebrates First Birthday
  Category: Events
Hertzsoft celebrates it’s first birth anniversary on 19th December 2018. The success story of a startup depends entirely on its team. Each member of our team represents the very spirit of the compa

 19 Dec 2018
1184
VIEW MORE 
Contact Us
What we can help you with ?
Contact Number
+91 8657242757
Email Address
contact@hertzsoft.com
Address
Office No. 105, First Floor, A-Wing, Al-Ameer Tower, Jail Road (South), Dongri X Lane, Dongri, Mumbai: 400 009
Send Message
Name
Enter Your Full Name
Email
Enter Your Email Address
Mobile
Enter Subject
Subject
Enter Subject
Message
Enter Message
Hertzsoft Technologies
Hertzsoft was started in year 2017 with a view to facilitate digital world. Hertzsoft intends to provide all their services at highly affordable prices. At the same time Hertzsoft also promises the quality of our product as customer sastisfaction is our primary goal.

iso-certified
ISO 9001: 2015 CERTIFIED QUALITY MANAGEMENT SYSTEM

Important Links
 Home
 About us
 Training
 Blogs & Events
 Career
 Contact us
 Privacy Policy
 Terms & Conditions
 Certificate Authenticity Check
 ID Authenticity Check
Contacts:
Email Address
contact@hertzsoft.com
Contact Number
+91 8657242757
Social Links:
    
© 2017 - 2024 Hertzsoft Technologies Pvt. Ltd. | All Rights Reserved.
Back to top


//about

Upgrade your tech skills and future-proof your career with our cutting-edge institute Hertzsoft's Educare!
Educare
Hertzsoft Technologies
Home(current)
About
Services 
Blogs
Portfolio
Contact Us
HOME      ABOUT
About
About Us
Know who we are ?
Hertzsoft is a new renowned name specially for Web App Development & Certification Courses. We provide Web Design & Development, Mobile App Development, Final Year Projects and Business Branding Services. Hertzsoft announced a record of 22 projects just within it's first birth anniversary. This is possible because we are a group of people gathered to convert our passion into profession.

Hertzsoft has excellent quality team which not only strive to give best customer services but also works for research within new trending fields such as Artificial Intelligence, Machine Learning, Neural Networks, Natural Language Processing and many more. Hertzsoft also conducts Certified Training Courses, Workshop, Seminars etc. for emerging technologies at highly affordable fees to evolve more IT Professionals.

About Vector Image
Our Vision
To facilitate evolve a new digital world with high productivity, peace and globalization of many businesses and to simplify human life with the help of intelligent machines.

Our Mission
To globalize the business of many individuals by the means of internet. To satisfy all our customers by providing high quality services at highly affordable price that too within very short span of time. To enrich IT professional’s knowledge by training them from highly experienced and qualified trainers.

Testimonials
What People say About us ?









Hertzsoft Technologies
Hertzsoft was started in year 2017 with a view to facilitate digital world. Hertzsoft intends to provide all their services at highly affordable prices. At the same time Hertzsoft also promises the quality of our product as customer sastisfaction is our primary goal.

iso-certified
ISO 9001: 2015 CERTIFIED QUALITY MANAGEMENT SYSTEM

Important Links
 Home
 About us
 Training
 Blogs & Events
 Career
 Contact us
 Privacy Policy
 Terms & Conditions
 Certificate Authenticity Check
 ID Authenticity Check
Contacts:
Email Address
contact@hertzsoft.com
Contact Number
+91 8657242757
Social Links:
    
© 2017 - 2024 Hertzsoft Technologies Pvt. Ltd. | All Rights Reserved.
Back to top

Upgrade your tech skills and future-proof your career with our cutting-edge institute Hertzsoft's Educare!
Educare
Hertzsoft Technologies
Home(current)
About
Services 
Blogs
Portfolio
Contact Us
HOME      SERVICES      WEB & DESKTOP APP DEVELOPMENT
Web & Desktop App Developer in Mumbai
Web Development
Why Choose us ?
Hertzsoft is a renowned name for Web Development in Mumbai. We provide customized Web Development Services at highly affordable price. We can help you build a website perfectly tailored for your experience. Our services are cost effective and make a statement with modern Web design services aimed to make your experience smoother and faster. We promise clean coded web pages and a speedy website with extreme security.

For desktop app development we choose the best framework and develop apps in such a way that we offer modern user interface that offer the power and performance of the application. We also provide high security and proper documentation for your Software.


Our Speciality
Why Choose us ?
Showcase Website
Personal Website | Product Landing Page | Business Website | And More

E-Commerce Website
Single Vendor Website | Multi Vendor Website | Payment Gateway

Business Web App
ERP Systems | Management Systems | CRM Systems | And More

Our Work
Get a clear idea about our work with some of our projects.

Alpine Riverhill

Dr. Nishikant Jha Website
Create You Own Website Now!
We would love to help you with your next digital project. Please get in touch and we will get back to you shortly.
   OR   
Hertzsoft Technologies
Hertzsoft was started in year 2017 with a view to facilitate digital world. Hertzsoft intends to provide all their services at highly affordable prices. At the same time Hertzsoft also promises the quality of our product as customer sastisfaction is our primary goal.

iso-certified
ISO 9001: 2015 CERTIFIED QUALITY MANAGEMENT SYSTEM

Important Links
 Home
 About us
 Training
 Blogs & Events
 Career
 Contact us
 Privacy Policy
 Terms & Conditions
 Certificate Authenticity Check
 ID Authenticity Check
Contacts:
Email Address
contact@hertzsoft.com
Contact Number
+91 8657242757
Social Links:
    
© 2017 - 2024 Hertzsoft Technologies Pvt. Ltd. | All Rights Reserved.
Back to top

Upgrade your tech skills and future-proof your career with our cutting-edge institute Hertzsoft's Educare!
Educare
Hertzsoft Technologies
Home(current)
About
Services 
Blogs
Portfolio
Contact Us
HOME      SERVICES      MOBILE APP DEVELOPMENT
Mobile App Development
App Development
Android / IOS
We at Hertzsoft Technologies help our clients to accelerate your business growth with right Mobile Application. We develop and manage Android as well as iOS Applications. The goal is to create simple and smoother-to-use apps. That makes you assured that our team of professional and creative UX team can broadly match your all requirements.

Our Main aspects are affordable pricing, extreme security and striking UI. To Help you build Mobile App for your Business Please reach us and one of our experts will guide you soon.

App Development
Our Speciality
Why Choose us ?
Business App
Business Management | Service Based Apps | And More

E-Commerce App
Single Vendor App | Multi Vendor App | Payment Gateway

Website to App
Converting any Website into Mobile App

Our Work
Get a clear idea about our work with some of our projects.

Zegoco Mobile App
Create You Own Mobile App Now!
We would love to help you with your next digital project. Please get in touch and we will get back to you shortly.
   OR   
Hertzsoft Technologies
Hertzsoft was started in year 2017 with a view to facilitate digital world. Hertzsoft intends to provide all their services at highly affordable prices. At the same time Hertzsoft also promises the quality of our product as customer sastisfaction is our primary goal.

iso-certified
ISO 9001: 2015 CERTIFIED QUALITY MANAGEMENT SYSTEM

Important Links
 Home
 About us
 Training
 Blogs & Events
 Career
 Contact us
 Privacy Policy
 Terms & Conditions
 Certificate Authenticity Check
 ID Authenticity Check
Contacts:
Email Address
contact@hertzsoft.com
Contact Number
+91 8657242757
Social Links:
    
© 2017 - 2024 Hertzsoft Technologies Pvt. Ltd. | All Rights Reserved.
Back to top


Upgrade your tech skills and future-proof your career with our cutting-edge institute Hertzsoft's Educare!
Educare
Hertzsoft Technologies
Home(current)
About
Services 
Blogs
Portfolio
Contact Us
HOME      SERVICES      BRANDING
Business Branding
Branding
Why Choose us ?
Hertzsoft presents our very own personalized, customized graphic designing skills to high excellent level, which will provide you a unique way of recognition that will set you apart from the old way of identification. If you have a design in mind, we can help you get it live. Explain the design to our experts and they will make sure you get what you have imagined and explained.

We bring you the next generation of marketing your products by designing all the products with all the detailing and uniqueness possible. Along with the minimalistic designing skills that will make all the products simple yet memorable to your customers.


Our Products
Best Quality Products at Affordable Prices

Logo Designing

Visiting Cards

Letterheads

Envelope

Files & Folder

Wall & Desk Calendars

Rubber Stamps

Banners (Flex & Sunboards)

Pendrives

Mugs

Pens

Mousepad
Our Work
Get a clear idea about our work with some of our projects.

SSDF Exporters Visiting Card
Create You Own Product Now!
We would love to help you with your next branding project. Please get in touch and we will get back to you shortly.
   OR   
Hertzsoft Technologies
Hertzsoft was started in year 2017 with a view to facilitate digital world. Hertzsoft intends to provide all their services at highly affordable prices. At the same time Hertzsoft also promises the quality of our product as customer sastisfaction is our primary goal.

iso-certified
ISO 9001: 2015 CERTIFIED QUALITY MANAGEMENT SYSTEM

Important Links
 Home
 About us
 Training
 Blogs & Events
 Career
 Contact us
 Privacy Policy
 Terms & Conditions
 Certificate Authenticity Check
 ID Authenticity Check
Contacts:
Email Address
contact@hertzsoft.com
Contact Number
+91 8657242757
Social Links:
    
© 2017 - 2024 Hertzsoft Technologies Pvt. Ltd. | All Rights Reserved.
Back to top

Upgrade your tech skills and future-proof your career with our cutting-edge institute Hertzsoft's Educare!
Educare
Hertzsoft Technologies
Home(current)
About
Services 
Blogs
Portfolio
Contact Us
HOME      SERVICES      FINAL YEAR PROJECTS
Final Year Projects Developers in Mumbai
Final Year Projects
We build projects at very affordable price.
Hey Student! Are you worried about your project? If you are a student who is looking for someone to help you with your final year projects, Hertzsoft Technologies is the right place for you. We can develop your entire project along with blackbook and synopsis report. We teach you everything that is important and make sure that your project stands out from everyone else's.

Thus, while working on your project you learn important skills needed for the future and you don't have to worry about either of those.


Our Specaility
On which domains we can work
Web App
Websites using PHP, Django & .Net with Executable & Source Code Files.

Android App
Apps Created using both Java and Kotlin with Executable & Source Code Files.

Desktop App
Desktop Applications using .NET, Java, Python Tkinter technologies.

Internet of Things (IoT)
Electronic Projects based on Ardunio and Rasberry Pi.

Artificial Intelligence
Chatbots, Recommendation, Evaluation & Prediction Systems

Data Science
Prediction, Fraud Dedection, Analysis Systems & Search Algorithms for big data.

Our Work
Get a clear idea about our work with some of our projects.

Employee Management System

Health Alert Application
Start Your Final Year Project Now !
We would love to help you with your final year project. Please get in touch and we will get back to you shortly.
   OR   
Hertzsoft Technologies
Hertzsoft was started in year 2017 with a view to facilitate digital world. Hertzsoft intends to provide all their services at highly affordable prices. At the same time Hertzsoft also promises the quality of our product as customer sastisfaction is our primary goal.

iso-certified
ISO 9001: 2015 CERTIFIED QUALITY MANAGEMENT SYSTEM

Important Links
 Home
 About us
 Training
 Blogs & Events
 Career
 Contact us
 Privacy Policy
 Terms & Conditions
 Certificate Authenticity Check
 ID Authenticity Check
Contacts:
Email Address
contact@hertzsoft.com
Contact Number
+91 8657242757
Social Links:
    
© 2017 - 2024 Hertzsoft Technologies Pvt. Ltd. | All Rights Reserved.
Back to top

Upgrade your tech skills and future-proof your career with our cutting-edge institute Hertzsoft's Educare!
Educare
Hertzsoft Technologies
Home(current)
About
Services 
Blogs
Portfolio
Contact Us
HOME      SERVICES      HARDWARE & NETWORKING SERVICES
Hardware & Networking Services
Hardware & Networking
Why Choose us ?
Our aim is to Make india errorless and problem less we are specialize in all cyber equipments like mobile, personal computers and laptops we also provide CCTV Installations Work And Satisfaction of Customer is at Higher Priority to us that's why The MD of the company himself works as an Technician we provide genuine products and components with varrying warranty on it. we troubleshoot your Problems in just 24 hours and provide u with assistence on it the rate provied by us are comparatively less from other vendors. our main aim is to make common man cyber satisfied.


Service Your Hardware Now!
We would love to help you hardware issues. Please get in touch and we will get back to you shortly.
   OR   
Hertzsoft Technologies
Hertzsoft was started in year 2017 with a view to facilitate digital world. Hertzsoft intends to provide all their services at highly affordable prices. At the same time Hertzsoft also promises the quality of our product as customer sastisfaction is our primary goal.

iso-certified
ISO 9001: 2015 CERTIFIED QUALITY MANAGEMENT SYSTEM

Important Links
 Home
 About us
 Training
 Blogs & Events
 Career
 Contact us
 Privacy Policy
 Terms & Conditions
 Certificate Authenticity Check
 ID Authenticity Check
Contacts:
Email Address
contact@hertzsoft.com
Contact Number
+91 8657242757
Social Links:
    
© 2017 - 2024 Hertzsoft Technologies Pvt. Ltd. | All Rights Reserved.
Back to top


`
            },
          ...msgs,
        ],
      });

      const aiMessage = response.data.choices[0].message;
      msgs.push(aiMessage);
      setChats(msgs);
    } catch (error) {
      console.log(error);
    }

    setIsTyping(false);
    scrollTo(0, 1e10);
  };

  const renderChats = () => {
    return chats.map((chat, index) => (
      <p key={index} className={chat.role === "user" ? "user_msg" : "bot"}>
        <span>
          <b>{chat.role.toUpperCase()}</b>
        </span>
        <span>:</span>
        <span style={{ padding: "0 10px" }}>{chat.content}</span>
      </p>
    ));
  };
  return (
    <>
      <div className="chat-popup">
        <div id="window" className="chat-window chatpop">
          <div
            style={{
              height: "50px",
              boxSizing: "border-box",
              padding: "15px",
            }}
          >
            HertzSoft ChatBot
          </div>
          <div className="chat-box">
            <div>{chats.length > 0 && renderChats()}</div>
            <div className={isTyping ? "" : "hide"}>
              <p>
                <i>{isTyping ? "Typing" : ""}</i>
              </p>
            </div>
          </div>
          <div className="imp chat-input">
            <form onSubmit={chat}>
              <input
                type="text"
                name="message"
                value={message}
                placeholder="Type a message here and hit Enter..."
                onChange={(e) => setMessage(e.target.value)}
              />
            </form>
            {/* <button className="char-input">send</button> */}
          </div>
        </div>
      </div>
      <button className="open-chat-button">chat</button>
    </>
  );
}
