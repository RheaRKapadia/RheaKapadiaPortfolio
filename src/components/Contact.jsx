import { useState, useRef } from "react";
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template id: template_8pp4k4n
//service id: service_r1dmir4
//public id: pcK7XI3m90RjGQPf1

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_r1dmir4', 'template_8pp4k4n', 
      {from_name: form.name, to_name: 'Rhea', from_email: form.email, to_email: 'rheakapadia@gmail.com', message: form.message},
      'pcK7XI3m90RjGQPf1')
    
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      }, (error) => {
        setLoading(false);

        console.log(error);
        alert('Something went wrong')
      })
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-primary p-8 rounded-2xl mt-[20%]">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className={styles.sectionSubText}>Email: Rheakapadia@gmail.com</p>

        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas/>
        </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")