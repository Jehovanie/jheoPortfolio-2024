import { AiOutlineProject } from "react-icons/ai";
import { FaDraftingCompass } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import "./service.css";

const Service = () => {
    const { t } = useTranslation();
    
    return (
        <section id="service" className="section_content_service">
            <h5>{t('service.subtitle')}</h5>
            <h2 className="margin-botton">{t('service.title')}</h2>

            <div className="container service_container">
                <div className="card_container">
                    <div className="card_header">
                        <div className="content_icon">
                            <AiOutlineProject className="card_icon" />
                        </div>
                    </div>
                    <div className="card_body">
                        <h3>{t('service.framing.title')}</h3>
                        <p>{t('service.framing.desc1')}</p>
                        <p>{t('service.framing.desc2')}</p>
                    </div>
                </div>

                <div className="card_container">
                    <div className="card_header">
                        <div className="content_icon">
                            <FaDraftingCompass className="card_icon" />
                        </div>
                    </div>
                    <div className="card_body">
                        <h3>{t('service.design.title')}</h3>
                        <p>{t('service.design.desc1')}</p>
                        <p>{t('service.design.desc2')}</p>
                    </div>
                </div>

                <div className="card_container">
                    <div className="card_header">
                        <div className="content_icon">
                            <FaCode className="card_icon" />
                        </div>
                    </div>
                    <div className="card_body">
                        <h3>{t('service.development.title')}</h3>
                        <p>{t('service.development.desc1')}</p>
                        <p>{t('service.development.desc2')}</p>
                    </div>
                </div>

                <div className="card_container">
                    <div className="card_header">
                        <div className="content_icon">
                            <FaCodeCompare className="card_icon" />
                        </div>
                    </div>
                    <div className="card_body">
                        <h3>{t('service.deployment.title')}</h3>
                        <p>{t('service.deployment.desc1')}</p>
                        <p>{t('service.deployment.desc2')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
