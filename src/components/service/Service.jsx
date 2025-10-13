import { BsPatchCheckFill } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { FaDraftingCompass } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

import "./service.css";

const Service = () => {
    return (
        <section id="service" className="section_content_service">
            <h5>Qu'est ce je peux faire...? </h5>
            <h2 className="margin-botton">Mon savoir faire</h2>

            <div className="container service_container">
                <div className="card_container">
                    <div className="card_header">
                        <div className="content_icon">
                            <AiOutlineProject className="card_icon" />
                        </div>
                    </div>
                    <div className="card_body">
                        <h3>Cadrage du projet</h3>
                        <p>Définition des exigences fonctionnelles et techniques.</p>
                        <p>Analyse et recommandation des outils technologiques requis pour une production efficace.</p>
                    </div>
                </div>

                <div className="card_container">
                    <div className="card_header">
                        <div className="content_icon">
                            <FaDraftingCompass className="card_icon" />
                        </div>
                    </div>
                    <div className="card_body">
                        <h3>Conception du projet</h3>
                        <p>Conception de base de données.</p>
                        <p>Automatisation de la collecte de données web via scraping</p>
                    </div>
                </div>

                <div className="card_container">
                    <div className="card_header">
                        <div className="content_icon">
                            <FaCode className="card_icon" />
                        </div>
                    </div>
                    <div className="card_body">
                        <h3>Développement</h3>
                        <p>Conception et intégration des composants UI</p>
                        <p>Intégration d’un système de login via API dans une architecture front/back</p>
                    </div>
                </div>

                <div className="card_container">
                    <div className="card_header">
                        <div className="content_icon">
                            <FaCodeCompare className="card_icon" />
                        </div>
                    </div>
                    <div className="card_body">
                        <h3>Déploiement et maintenance</h3>
                        <p>Contrôle qualité, maintenance et amélioration des performances.</p>
                        <p>Conception et mise en place d’une infrastructure complète pour l’intégration et le déploiement continus (CI/CD).</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
