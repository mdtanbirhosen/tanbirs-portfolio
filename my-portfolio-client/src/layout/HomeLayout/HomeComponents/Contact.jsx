import Title from "../../../components/Title";
import ContactInfo from "./ContactInfo";
import EmailContactForm from "./EmailContactForm";

const Contact = () => {
    return (
        <div>
            <Title title="Contact Me"></Title>
            <div className="grid md:grid-cols-2 gap-5 ">
                <div>
                    <EmailContactForm></EmailContactForm>
                </div>
                <div>
                    <ContactInfo></ContactInfo>
                </div>
            </div>
        </div>
    );
};

export default Contact;