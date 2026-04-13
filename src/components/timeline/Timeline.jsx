import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useScrollAnimationChildren } from "../../hooks/useScrollAnimation";
import "./timeline.css";

const typeColors = {
    Emploi: "var(--color-primary)",
    Job: "var(--color-primary)",
    Personnel: "#a78bfa",
    Personal: "#a78bfa",
    Freelance: "#34d399",
};

const Timeline = () => {
    const { t } = useTranslation();
    const items = t("timeline.items", { returnObjects: true });
    const listRef = useRef(null);

    useScrollAnimationChildren(listRef, {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        stagger: 0.18,
        duration: 0.7,
    });

    return (
        <section className="section timeline_section" id="timeline">
            <h5>{t("timeline.subtitle")}</h5>
            <h2>{t("timeline.title")}</h2>

            <div className="container">
                <div className="timeline_wrapper" ref={listRef}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline_item ${index % 2 === 0 ? "timeline_item--left" : "timeline_item--right"}`}
                        >
                            <div className="timeline_dot" style={{ borderColor: typeColors[item.type] || "var(--color-primary)" }} />

                            <div className="timeline_card">
                                <span
                                    className="timeline_type"
                                    style={{ color: typeColors[item.type] || "var(--color-primary)", borderColor: typeColors[item.type] || "var(--color-primary)" }}
                                >
                                    {item.type}
                                </span>
                                <p className="timeline_period">{item.period}</p>
                                <h3 className="timeline_role">{item.role}</h3>
                                <p className="timeline_company">
                                    {item.company}
                                    <span className="timeline_location"> · {item.location}</span>
                                </p>
                                <p className="timeline_description">{item.description}</p>
                                <div className="timeline_techs">
                                    {item.techs.map((tech) => (
                                        <span key={tech} className="timeline_tech_tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
