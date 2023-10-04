'use client'

import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useFormspark } from "@formspark/use-formspark";

import Modal from "../modal";
import {useState} from "react";
import axios from "axios";

import Buttons from '../buttons';

const Hero = () => {



    return (
        <>
        <section className={'relative w-full'}>
            <Image
                className={'hidden md:block rounded-lg'}
                sizes="100vw"
                width={300}
                height={300}
                // className="h-auto max-w-full"
                src={"/images/background.png" }
                alt="image description"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
            <Image
                className={'hidden md:block'}
                sizes="50vw"
                width={300}
                height={300}
                // className="h-auto max-w-full"
                src={"/images/ruffl-SBO-amir-kahn-s6.png" }
                alt="image description"
                style={{
                    width: '60%',
                    height: 'auto',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '2rem'
                }}
            />


            <Image
                className={'block md:hidden rounded-lg'}
                sizes="100vw"
                width={300}
                height={300}
                // className="h-auto max-w-full"
                src={"/images/mobile-background.png" }
                alt="image description"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />

            <Buttons />



        </section>
            <Buttons mobile />
        </>
    );
}

export default Hero;