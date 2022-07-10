import React from "react";
import { FaChevronDown, FaRegUser } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
import { MdOutlineSearch } from "react-icons/md";
import styles from "../../styles/Header.module.css";

type Props = {};

function Header({}: Props) {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <ul className={styles.headerTools}>
                    <li className={styles.userIcon}>
                        <FaRegUser color="white" size={12} />
                    </li>
                    <li className={styles.searchIcon}>
                        <MdOutlineSearch color="black" size={14} />
                    </li>
                </ul>
                <ul className={styles.headerMenu}>
                    <li>حول</li>
                    <li>معلمون </li>
                    <li>
                        <FaChevronDown size={6} /> فئه{" "}
                    </li>
                    <li>
                        <FaChevronDown size={6} /> الدورات{" "}
                    </li>
                    <li>مسکن</li>
                </ul>
                <div className={styles.capSection}>
                    <FcGraduationCap size={38} />
                    <div className={styles.capSectionText}>
                        <span>الاکادامیه </span>
                        <span> العریبه</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
