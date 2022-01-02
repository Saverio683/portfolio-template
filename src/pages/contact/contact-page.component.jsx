import { Fragment } from 'react';

import EmailForm from '../../components/email-form/email-form.component';
import Footer from '../../components/footer/footer.component';

import { contactPageData } from '../../assets/datas';

import { PageContainer, CoolSpan, ImagesContainer, AccountIco } from './contact-page.styles.jsx';
import { Title } from '../../app/app.styles';

const ContactPage = () => (
    <Fragment>
        <PageContainer>
            <Title>GET IN TOUCH</Title>
            <CoolSpan>I'm on this accounts:</CoolSpan>
            <ImagesContainer>
            {
                contactPageData.profileIcons.map((ico, i) => (
                    <a href='/' key={i}>
                        <AccountIco 
                            src={ico} 
                            alt='profile' 
                            key={i}
                        />
                    </a>
                ))
            }
            </ImagesContainer>
            <CoolSpan>You can also send me an email:</CoolSpan>
            <EmailForm />
        </PageContainer> 
        <Footer />
    </Fragment>
)

export default ContactPage;