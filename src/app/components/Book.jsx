import { Formik, Field, Form, ErrorMessage } from 'formik';
import styles from '../page.module.css'

function Book(props) {
  const { handleBookingClick } = props;
  const initialValues = {
    name: '',
    phoneNumber: '',
    email: '',
    tattooIdea: '',
    location: '',
    approximateSize: '',
    colorChoice: '',
    selectedDates: ''
    };

    const handleNetlifySubmit = async (values, { resetForm }) => {
      resetForm();
      handleBookingClick();
    }

    const handleSubmit = async (values, { resetForm }) => {
      try {
        const response = await fetch('/api/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values), 
        });
    
        if (response.ok) {
          const formData = await response.json()
          console.log(formData)
          resetForm();
          console.log('Form submitted successfully!');
        } else {
          console.log('Form submission failed.');
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    };
    
  return (
    <div id="book" className={styles.content}>
      <h2>Booking Request</h2>
      {/* <Formik initialValues={initialValues} onSubmit={handleSubmit}> */}
      <Formik initialValues={initialValues} onSubmit={handleNetlifySubmit}>
        <Form name="book" method="POST" data-netlify="true" className={styles.form}>
        {/* <Form className={styles.form} name="book" method="POST" data-netlify="true"> */}
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" style={{ width: '100%', height: '40px', padding: '.5rem' }}/>
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone</label>
            <Field type="tel" id="phoneNumber" name="phoneNumber" style={{ width: '100%', height: '40px', padding: '.5rem' }}/>
            <ErrorMessage name="phoneNumber" component="div" />
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <Field type="email" id="email" name="email" style={{ width: '100%', height: '40px', padding: '.5rem' }}/>
            <ErrorMessage name="email" component="div" />
          </div>


          <div>
            <label htmlFor="location">Location of tattoo</label>
            <Field type="text" id="location" name="location" style={{ width: '100%', height: '40px', padding: '.5rem' }}/>
            <ErrorMessage name="location" component="div" />
          </div>

          <div>
            <label htmlFor="approximateSize">Approximate Size (in inches)</label>
            <Field type="text" id="approximateSize" name="approximateSize" style={{ width: '100%', height: '40px', padding: '.5rem' }}/>
            <ErrorMessage name="approximateSize" component="div" />
          </div>

          <div>
            <label htmlFor="colorChoice">Color / Black Work / B & G ?</label>
            <Field type="text" id="colorChoice" name="colorChoice" style={{ width: '100%', height: '40px', padding: '.5rem' }}/>
            <ErrorMessage name="colorChoice" component="div" />
          </div>


          <div>
            <label htmlFor="selectedDates">Month & Typical weekly availability</label>
            <Field type="textarea" id="selectedDates" name="selectedDates" multiple style={{ width: '100%', height: '40px', padding: '.5rem' }}/>
            <ErrorMessage name="selectedDates" component="div" />
          </div>

          <div>
            <label htmlFor="tattooIdea">Description</label>
            <Field as="textarea" id="tattooIdea" name="tattooIdea" style={{ width: '100%', height: '140px', padding: '.5rem' }}/>
            <ErrorMessage name="tattooIdea" component="div" />
          </div>

          <button type="submit" className={styles.button}>Submit</button>
          
        </Form>
      </Formik>
    </div>
  );
}

export default Book;
