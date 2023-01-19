import Image from "next/image";
import React, { useEffect } from "react";
import picture from "../../../public/media/geral/my_picture.png";
import { useSelector } from "react-redux";
import { isLineStaterd } from "@/store/redures/headerReducer";
import { useAppSelector } from "@/store/hooks";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

// import { Container } from './styles';

const ProfileImage: React.FC = () => {
  const startAnimation = useAppSelector(isLineStaterd);
  const x = useMotionValue(-100);
  const opacity = useTransform(x, [-100, 0], [0, 1]);

  useEffect(() => {
    if (startAnimation) {
      animate(x, 0, {
        duration: 1,
      });
    }
  }, [startAnimation]);

  return (
    <motion.div style={{ x, opacity }}>
      <Image src={picture} alt="Photo Luke" className="img-fluid" />
    </motion.div>
  );
};

export default ProfileImage;
