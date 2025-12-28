import aws from '../app/assets/svg/skills/aws.svg';
import azure from '../app/assets/svg/skills/azure.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';
import c from '../app/assets/svg/skills/c.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import css from '../app/assets/svg/skills/css.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import opencv from '../app/assets/svg/skills/opencv.svg';
import python from '../app/assets/svg/skills/python.svg';
import pytorch from '../app/assets/svg/skills/pytorch.svg';
import react from '../app/assets/svg/skills/react.svg';
import selenium from '../app/assets/svg/skills/selenium.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import tensorflow from '../app/assets/svg/skills/tensorflow.svg';
import pandas from '../app/assets/svg/skills/pandas.svg';
import scikitlearn from '../app/assets/svg/skills/scikit-learn.svg';
import kubernetes from '../app/assets/svg/skills/kubernetes.svg';
import linux from '../app/assets/svg/skills/linux.svg';
import datascience from '../app/assets/svg/skills/datascience.svg';
import ai from '../app/assets/svg/skills/ai.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'aws':  
      return aws;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'tensorflow':
      return tensorflow;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'figma':
      return figma;
    case 'microsoft office':
      return microsoftoffice;
    case 'canva':
      return canva;
    case 'pandas':
      return pandas;
    case 'sklearn':
      return scikitlearn;
    case '.net':
      return dotnet;
    case '.net core':
      return dotnetcore
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    case 'fastapi':
      return fastapi;
    case 'data science':
      return datascience;  
    case 'ai-ml':
      return ai;  
    default:
      break;
  }
}
