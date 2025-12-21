import {Component} from 'react';
import { ContactForm } from '../components/ContactForm';

class ContactContainer extends Component {
    render() {        
       return (
            <section className="section">
                <div className="card">
                    <ContactForm />
                </div>
          </section>
        );
    } 
}

export default ContactContainer;