import Navbar from "../components/Navbar";

export default function About() {
  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px"
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    padding: "50px 40px",
    textAlign: "center"
  };

  const sectionStyle = {
    marginBottom: "50px",
    textAlign: "left",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "40px"
  };

  const sectionLastStyle = {
    marginBottom: "0",
    textAlign: "left",
    borderBottom: "none",
    paddingBottom: "0"
  };

  const headingStyle = {
    color: "#2c3e50",
    fontSize: "32px",
    marginBottom: "20px",
    fontWeight: "700"
  };

  const subHeadingStyle = {
    color: "#34495e",
    fontSize: "24px",
    marginBottom: "15px",
    marginTop: "30px",
    fontWeight: "600"
  };

  const paragraphStyle = {
    color: "#555",
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "15px"
  };

  const listItemStyle = {
    color: "#555",
    fontSize: "15px",
    lineHeight: "2",
    marginLeft: "30px"
  };

  const featureBoxStyle = {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    margin: "15px 0"
  };

  const titleStyle = {
    textAlign: "center",
    color: "#2c3e50",
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "15px"
  };

  const subtitleStyle = {
    textAlign: "center",
    color: "#7f8c8d",
    fontSize: "18px",
    marginBottom: "40px",
    fontStyle: "italic"
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <div style={cardStyle}>
          {/* Title Section */}
          <h1 style={titleStyle}>About HealthCare+</h1>
          <p style={subtitleStyle}>
            Revolutionizing Healthcare Through Innovation and Compassion
          </p>

          {/* Who We Are */}
          <div style={sectionStyle}>
            <h2 style={headingStyle}>👥 Who We Are</h2>
            <p style={paragraphStyle}>
              HealthCare+ is a modern, digital-first healthcare platform designed to bridge the gap between patients and qualified healthcare professionals. We are a team of dedicated professionals committed to making quality healthcare accessible, affordable, and convenient for everyone. Our platform combines cutting-edge technology with a compassionate approach to patient care.
            </p>
            <p style={paragraphStyle}>
              Founded on the principles of transparency and excellence, HealthCare+ serves as a trusted intermediary connecting patients with verified doctors across multiple specializations. We understand the challenges of traditional healthcare systems – long waiting times, scheduling difficulties, and limited accessibility – and we've built a solution that addresses these issues head-on.
            </p>
            <p style={paragraphStyle}>
              With a network of experienced doctors and a user-friendly appointment system, we're transforming how people access healthcare services. Whether you need a consultation with a General Physician, Cardiologist, Dermatologist, or Pediatrician, HealthCare+ makes it simple and convenient.
            </p>
          </div>

          {/* Our Mission */}
          <div style={sectionStyle}>
            <h2 style={headingStyle}>🎯 Our Mission</h2>
            <p style={paragraphStyle}>
              <strong>To democratize healthcare access and empower individuals with convenient, affordable, and high-quality medical services.</strong>
            </p>
            <p style={paragraphStyle}>
              Our mission is rooted in the belief that quality healthcare should not be a luxury but a right accessible to all. We are committed to:
            </p>
            <ul style={{ marginBottom: "15px" }}>
              <li style={listItemStyle}>
                <strong>Eliminating Barriers:</strong> Removing geographical and temporal obstacles that prevent people from accessing healthcare
              </li>
              <li style={listItemStyle}>
                <strong>Ensuring Quality:</strong> Maintaining strict standards by working only with verified and qualified healthcare professionals
              </li>
              <li style={listItemStyle}>
                <strong>Building Trust:</strong> Creating a transparent ecosystem where patients feel confident and secure in their healthcare choices
              </li>
              <li style={listItemStyle}>
                <strong>Driving Affordability:</strong> Making healthcare services economically accessible without compromising on quality
              </li>
              <li style={listItemStyle}>
                <strong>Promoting Wellness:</strong> Encouraging preventive care and regular check-ups through easy appointment scheduling
              </li>
            </ul>
          </div>

          {/* Our Vision */}
          <div style={sectionStyle}>
            <h2 style={headingStyle}>🌟 Our Vision</h2>
            <p style={paragraphStyle}>
              <strong>To become the leading, most trusted healthcare appointment platform globally, setting new standards for patient care and digital health innovation.</strong>
            </p>
            <p style={paragraphStyle}>
              We envision a future where:
            </p>
            <ul style={{ marginBottom: "15px" }}>
              <li style={listItemStyle}>
                Healthcare is seamlessly accessible at the click of a button, anytime and anywhere
              </li>
              <li style={listItemStyle}>
                Technology and human compassion work together to deliver personalized, effective medical services
              </li>
              <li style={listItemStyle}>
                Patients have complete control over their health journey with comprehensive appointment history and records
              </li>
              <li style={listItemStyle}>
                Healthcare professionals can focus entirely on patient care without administrative burdens
              </li>
              <li style={listItemStyle}>
                Every individual, regardless of background or location, has equal access to quality medical consultation
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div style={sectionStyle}>
            <h2 style={headingStyle}>⭐ Why Choose HealthCare+?</h2>
            
            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>✓ Verified & Qualified Doctors</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                All our doctors are thoroughly verified with valid credentials and extensive experience in their respective fields. We maintain strict quality standards to ensure you receive care only from the best.
              </p>
            </div>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>✓ Easy Online Appointment Booking</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                Our intuitive platform makes scheduling appointments effortless. Browse doctors, check availability, and book your slot in minutes without any hassle or waiting.
              </p>
            </div>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>✓ Multiple Medical Specializations</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                From General Physicians to Cardiologists, Dermatologists, and Pediatricians, we cover all major medical specializations. Find the right specialist for your health needs.
              </p>
            </div>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>✓ Flexible Appointment Scheduling</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                Multiple time slots available daily. Choose what works best for your schedule – whether it's morning, afternoon, or evening appointments.
              </p>
            </div>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>✓ Comprehensive Appointment Management</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                Keep track of all your bookings, receive status updates, and manage your appointments from one central dashboard. Complete appointment history at your fingertips.
              </p>
            </div>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>✓ Secure & Private</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                Your health information is protected with industry-standard security. We prioritize your privacy and maintain confidentiality of all medical data.
              </p>
            </div>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>✓ Transparent & Honest Communication</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                We believe in clear, transparent communication. Know exactly what to expect, doctor qualifications, specializations, and experience upfront.
              </p>
            </div>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>✓ Dedicated Support</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                Our support team is available to assist you with any questions or concerns. We're here to ensure your experience is smooth and satisfactory.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div style={sectionLastStyle}>
            <h2 style={headingStyle}>⚙️ How Our Appointment System Works</h2>
            <p style={paragraphStyle}>
              HealthCare+ has simplified the appointment booking process into four easy steps:
            </p>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0", fontSize: "20px" }}>Step 1: Create Your Account</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                Sign up as a patient with your basic information. It takes less than 2 minutes. Your account is secure and completely private.
              </p>
            </div>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0", fontSize: "20px" }}>Step 2: Browse Doctors</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                Explore our network of qualified doctors. Filter by specialization, check their experience, ratings, and read patient reviews to make an informed choice.
              </p>
            </div>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0", fontSize: "20px" }}>Step 3: Select Your Preferred Slot</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                Pick a date and time that suits your schedule. We show available slots for each doctor, making it easy to find a convenient appointment time.
              </p>
            </div>

            <div style={featureBoxStyle}>
              <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0", fontSize: "20px" }}>Step 4: Confirmation & Management</h3>
              <p style={{ color: "#666", marginBottom: "0", fontSize: "14px" }}>
                Your appointment is confirmed instantly. Track it on your patient dashboard, receive status updates from doctors (Pending, Approved, or Rejected), and manage your appointments anytime.
              </p>
            </div>

            <p style={paragraphStyle}>
              <strong>For Doctors:</strong> Our platform also provides doctors with a comprehensive dashboard to manage their patient appointments. They can review pending bookings, approve or reject appointments, and maintain organized schedules for better patient care.
            </p>

            <p style={paragraphStyle}>
              <strong>For Administrators:</strong> Healthcare administrators can oversee all appointments, manage doctors, and ensure system-wide efficiency through our admin dashboard.
            </p>

            <div style={{ backgroundColor: "#e8f4f8", padding: "25px", borderRadius: "8px", marginTop: "30px", border: "2px solid #2c3e50" }}>
              <p style={{ color: "#2c3e50", fontSize: "16px", margin: "0", fontWeight: "500" }}>
                💡 <strong>Pro Tip:</strong> Download the HealthCare+ app for even faster booking and notifications. Never miss an appointment reminder with our push notifications system.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
