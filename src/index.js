import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './images/logo.png';
import { FaUserGroup } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { CiDiscount1 } from "react-icons/ci";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoDocumentOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { RiUserUnfollowFill } from "react-icons/ri";
import { MdOutlineMenuBook } from "react-icons/md";
import { GiWhiteBook } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { IoDocumentSharp } from "react-icons/io5";
import { TbUserSquareRounded } from "react-icons/tb";
function Student(){
         return(
            <div class="manage">
            <div class="system">
            <div class="logo"><img src={logo}></img> </div>
            <div class="division1">
              <FaUserGroup className='menu1'/>
            <p className="word">Student management</p>
            </div>
            <div class="division1">
              <FaRegMessage className='menu1'/>
            <p className="word">financial management</p>
            </div>
            <div class="division1">
              <CiDiscount1 className='menu1'/>
            <p className="word">quality center</p>
            </div>
            <div class="division1">
              <BsFillGrid1X2Fill className='menu1'/>
            <p className="word">report delivery</p>
            </div>
            <div class="division1">
              <IoDocumentOutline className='menu1'/>
            <p className="word">Attendance</p>
            </div>
           </div>
          <div class="head">
               <div class="header">
                <h1 className='topic'>Student management</h1>
               </div>
               <div class='box'>
                <div class='box1'>
                <FaUser className='menu2'/>
                <h4>regular students</h4>
                <h6>8</h6>
                </div>
                <div class='box1'>
                <FaRegUser className='menu2'/>
                <h4>remedial students</h4>
                <h6>13</h6>
                </div>
                <div class='box1'>
                <RiUserUnfollowFill className='menu2'/>
                <h4>In paid clubs</h4>
                <h6>00</h6>
                </div>
               </div>
               <hr></hr>
               <h3>Menu</h3>
               <div class='box2'>
                    <div class="box3">
                    <FaUser className='menu3'/>
                    <p className='name'>regular enrollment</p>
                    </div>
                    <div class="box3">
                    <GiWhiteBook className='menu3'/>
                    <p className='name'>remedial enrollment</p>
                    </div>
                    <div class="box3">
                    <TbUserSquareRounded className='menu3'/>
                    <p className='name'>club management</p>
                    </div>
               </div>
               <div class='box2'>
                    <div class="box3">
                    <MdOutlineMenuBook className='menu3'/>
                    <p className='name'>class management</p>
                    </div>
                    <div class="box3">
                    <IoMdMail className='menu3'/>
                    <p className='name'>SMS/EMAIL services</p>
                    </div>
                    <div class="box3">
                    <IoDocumentSharp  className='menu3'/>
                    <p className='name'>attendance</p>
                    </div>
               </div>
          </div>
          </div>
         )
}
ReactDOM.render(<Student/>,document.getElementById("root"));