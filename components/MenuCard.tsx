import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Modal from "./Modal";

interface Props {
  itemSrc: string;
  alt: string;
  title: string;
  desc: string;
  prices?: number;
  id: string;
}

const MenuCard = ({ itemSrc, alt, title, desc, prices, id }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        maxWidth: "100%",
      }}
      className="mb-4"
    >
      <div className="card rounded-3 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <Image
              src={itemSrc}
              alt={alt}
              width={300}
              height={300}
              className="card-img-top img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title mb-2">{title}</h5>
              <p className="card-text mb-3 fs-5">{desc}</p>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <span className="fw-bold fs-5 mb-2 mb-md-0">${prices}</span>
                <Modal
                  productId={id}
                  title={title}
                  src={itemSrc}
                  alt={alt}
                  desc={desc}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
