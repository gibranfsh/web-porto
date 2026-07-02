import type { ComponentType, SVGProps } from "react";

import Python from "@thesvg/react/python";
import Haskell from "@thesvg/react/haskell";
import C from "@thesvg/react/c";
import Java from "@thesvg/react/java";
import Html5 from "@thesvg/react/html5";
import Css3 from "@thesvg/react/css3";
import TailwindCss from "@thesvg/react/tailwind-css";
import Javascript from "@thesvg/react/javascript";
import Typescript from "@thesvg/react/typescript";
import Php from "@thesvg/react/php";
import Go from "@thesvg/react/go";
import Graphql from "@thesvg/react/graphql";
import Mysql from "@thesvg/react/mysql";
import Mariadb from "@thesvg/react/mariadb";
import Sqlite from "@thesvg/react/sqlite";
import Mongodb from "@thesvg/react/mongodb";
import Supabase from "@thesvg/react/supabase";
import CockroachLabs from "@thesvg/react/cockroach-labs";
import AmazonWebServices from "@thesvg/react/amazon-web-services";
import GoogleCloud from "@thesvg/react/google-cloud";
import MicrosoftAzure from "@thesvg/react/microsoft-azure";
import Firebase from "@thesvg/react/firebase";
import Vercel from "@thesvg/react/vercel";
import Heroku from "@thesvg/react/heroku";
import Netlify from "@thesvg/react/netlify";
import Docker from "@thesvg/react/docker";
import Kubernetes from "@thesvg/react/kubernetes";
import Helm from "@thesvg/react/helm";
import Terraform from "@thesvg/react/terraform";
import Datadog from "@thesvg/react/datadog";
import ApacheKafka from "@thesvg/react/apache-kafka";
import Git from "@thesvg/react/git";
import Github from "@thesvg/react/github";
import Gitlab from "@thesvg/react/gitlab";
import Bitbucket from "@thesvg/react/bitbucket";
import Keras from "@thesvg/react/keras";
import ScikitLearn from "@thesvg/react/scikit-learn";
import Jest from "@thesvg/react/jest";
import Postman from "@thesvg/react/postman";
import Figma from "@thesvg/react/figma";
import Trello from "@thesvg/react/trello";
import Slack from "@thesvg/react/slack";
import Cplusplus from "@thesvg/react/cplusplus";
import Csharp from "@thesvg/react/csharp";
import Dart from "@thesvg/react/dart";
import Dotnet from "@thesvg/react/dotnet";
import Prisma from "@thesvg/react/prisma";
import Redis from "@thesvg/react/redis";
import VisualStudioCode from "@thesvg/react/visual-studio-code";
import OpenaiChatgpt from "@thesvg/react/openai-chatgpt";
import Deepseek from "@thesvg/react/deepseek";
import Claude from "@thesvg/react/claude";
import ClaudeCode from "@thesvg/react/claude-code";
import GithubCopilot from "@thesvg/react/github-copilot";
import Cursor from "@thesvg/react/cursor";
import GoogleGemini from "@thesvg/react/google-gemini";
import CodexOpenai from "@thesvg/react/codex-openai";
import Nodedotjs from "@thesvg/react/nodedotjs";
import Express from "@thesvg/react/express";
import React from "@thesvg/react/react";
import Nextdotjs from "@thesvg/react/nextdotjs";
import Vuedotjs from "@thesvg/react/vuedotjs";
import Codeigniter from "@thesvg/react/codeigniter";
import Laravel from "@thesvg/react/laravel";
import Nestjs from "@thesvg/react/nestjs";
import Reactnative from "@thesvg/react/reactnative";
import Flutter from "@thesvg/react/flutter";
import Trpc from "@thesvg/react/trpc";
import Inertiajs from "@thesvg/react/inertiajs";
import Typeorm from "@thesvg/react/typeorm";
import Datocms from "@thesvg/react/datocms";
import Clockify from "@thesvg/react/clockify";
import Jupyter from "@thesvg/react/jupyter";
import Filament from "@thesvg/react/filament";
import MicrosoftSqlServer from "@thesvg/react/microsoft-sql-server";

export type SvgIconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { variant?: "default" | "mono" | string }
>;

/** Default variant is black or unstyled on dark tiles — use mono + white */
export const MONO_WHITE_ON_DARK = new Set([
  "cursor",
  "express",
]);

/** Default uses currentColor (renders black) — keep default, set white */
export const DEFAULT_WHITE_ON_DARK = new Set([
  "gorm",
  "openai-chatgpt",
  "sql",
]);

/** Per-icon thesvg render tuning (variant + tile classes for brand fills) */
export type IconRenderOptions = {
  variant?: string;
  tileClassName?: string;
};

export const ICON_RENDER: Partial<Record<string, IconRenderOptions>> = {
  // default variant strips per-path fills — restore official two-tone logo
  kubernetes: {
    tileClassName:
      "[&_path:first-of-type]:fill-[#326CE5] [&_path:last-of-type]:fill-white",
  },
  go: { tileClassName: "[&_g]:fill-[#00ADD8] [&_path]:fill-[#00ADD8]" },
  github: { variant: "dark" },
  "apache-kafka": { variant: "dark" },
  terraform: { variant: "mono", tileClassName: "[&_path]:fill-[#7B42BC]" },
  "codex-openai": { tileClassName: "text-white" },
  nextdotjs: { variant: "wordmark" },
};

export function getIconRenderOptions(thesvgSlug: string): IconRenderOptions {
  const configured = ICON_RENDER[thesvgSlug] ?? {};

  if (MONO_WHITE_ON_DARK.has(thesvgSlug)) {
    return {
      variant: "mono",
      tileClassName: "text-white [&_*]:fill-current",
      ...configured,
    };
  }

  if (DEFAULT_WHITE_ON_DARK.has(thesvgSlug)) {
    return {
      tileClassName: "text-white",
      ...configured,
    };
  }

  return configured;
}

/** Official thesvg default.svg — group strokes + blue body + white eyes */
function PostgresqlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 432.071 445.383"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      aria-hidden
      {...props}
    >
      <g
        fillRule="nonzero"
        clipRule="nonzero"
        fill="none"
        stroke="#fff"
        strokeWidth={12.4651}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={4}
      >
        <path
          d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107"
          fill="#000"
          stroke="#000"
          strokeWidth={37.3953}
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        <path
          stroke="none"
          fill="#336791"
          d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z"
        />
        <path d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329" />
        <path
          strokeLinejoin="bevel"
          d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762"
        />
        <path d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z" />
        <path d="M187.715 274.069c-1.368-8.917 2.93-19.528 7.536-31.942 6.922-18.626 22.893-37.255 10.117-96.339-9.523-44.029-73.396-9.163-73.436-3.193-.039 5.968 2.889 30.26-1.067 58.548-5.162 36.913 23.488 68.132 56.479 64.938" />
        <path
          fill="#fff"
          strokeWidth={4.155}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M172.517 141.7c-.288 2.039 3.733 7.48 8.976 8.207 5.234.73 9.714-3.522 9.998-5.559.284-2.039-3.732-4.285-8.977-5.015-5.237-.731-9.719.333-9.996 2.367z"
        />
        <path
          fill="#fff"
          strokeWidth={2.0775}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M331.941 137.543c.284 2.039-3.732 7.48-8.976 8.207-5.238.73-9.718-3.522-10.005-5.559-.277-2.039 3.74-4.285 8.979-5.015 5.239-.73 9.718.333 10.002 2.368z"
        />
        <path d="M350.676 123.432c.863 15.994-3.445 26.888-3.988 43.914-.804 24.748 11.799 53.074-7.191 81.435" />
      </g>
    </svg>
  );
}

function TensorflowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 266.79 269.02" aria-hidden {...props}>
      <defs>
        <clipPath id="tf-brand-clip-1">
          <polygon
            fill="none"
            points="200.76 95.86 136.29 59.02 136.29 210 162.05 195.04 162.05 152.57 181.5 163.82 181.39 134.77 162.05 123.72 162.05 106.85 200.85 129.27 200.76 95.86"
          />
        </clipPath>
        <linearGradient
          id="tf-brand-gradient-1"
          x1="60.08"
          y1="134.33"
          x2="218.39"
          y2="134.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff6f00" />
          <stop offset="1" stopColor="#ffa800" />
        </linearGradient>
        <clipPath id="tf-brand-clip-2">
          <polygon
            fill="none"
            points="66.03 95.86 130.5 59.02 130.5 210 104.74 195.04 104.74 106.85 65.94 129.27 66.03 95.86"
          />
        </clipPath>
        <linearGradient
          id="tf-brand-gradient-2"
          x1="59"
          y1="134.33"
          x2="217.32"
          y2="134.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff6f00" />
          <stop offset="1" stopColor="#ffa800" />
        </linearGradient>
      </defs>
      <g clipPath="url(#tf-brand-clip-1)">
        <rect
          fill="url(#tf-brand-gradient-1)"
          x="60.08"
          y="58.47"
          width="158.31"
          height="151.72"
        />
      </g>
      <g clipPath="url(#tf-brand-clip-2)">
        <rect
          fill="url(#tf-brand-gradient-2)"
          x="59"
          y="58.47"
          width="158.31"
          height="151.72"
        />
      </g>
    </svg>
  );
}

function AntigravityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 15" fill="none" aria-hidden {...props}>
      <mask
        id="ag-brand-mask"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="15"
      >
        <path
          d="M14.0777 13.984C14.945 14.6345 16.2458 14.2008 15.0533 13.0084C11.476 9.53949 12.2349 0 7.79033 0C3.34579 0 4.10461 9.53949 0.527295 13.0084C-0.773543 14.3092 0.635692 14.6345 1.50293 13.984C4.86344 11.7076 4.64663 7.69664 7.79033 7.69664C10.934 7.69664 10.7172 11.7076 14.0777 13.984Z"
          fill="black"
        />
      </mask>
      <g mask="url(#ag-brand-mask)">
        <g filter="url(#ag-brand-filter-0)">
          <path
            d="M-0.658907 -3.2306C-0.922679 -0.906781 1.07986 1.22861 3.81388 1.53894C6.54791 1.84927 8.97811 0.217009 9.24188 -2.10681C9.50565 -4.43063 7.50312 -6.56602 4.76909 -6.87635C2.03506 -7.18667 -0.395135 -5.55442 -0.658907 -3.2306Z"
            fill="#FFE432"
          />
        </g>
        <g filter="url(#ag-brand-filter-1)">
          <path
            d="M9.88233 4.36642C10.5673 7.31568 13.566 9.13902 16.5801 8.43896C19.5942 7.73891 21.4823 4.78056 20.7973 1.83131C20.1123 -1.11795 17.1136 -2.94128 14.0995 -2.24123C11.0854 -1.54118 9.19733 1.41717 9.88233 4.36642Z"
            fill="#FC413D"
          />
        </g>
        <g filter="url(#ag-brand-filter-2)">
          <path
            d="M-8.05291 6.34512C-7.18736 9.38883 -3.28925 10.9473 0.653774 9.82598C4.5968 8.7047 7.09158 5.32829 6.22603 2.28458C5.36048 -0.759142 1.46236 -2.31758 -2.48066 -1.19629C-6.42368 -0.0750048 -8.91846 3.3014 -8.05291 6.34512Z"
            fill="#00B95C"
          />
        </g>
        <g filter="url(#ag-brand-filter-3)">
          <path
            d="M-8.05291 6.34512C-7.18736 9.38883 -3.28925 10.9473 0.653774 9.82598C4.5968 8.7047 7.09158 5.32829 6.22603 2.28458C5.36048 -0.759142 1.46236 -2.31758 -2.48066 -1.19629C-6.42368 -0.0750048 -8.91846 3.3014 -8.05291 6.34512Z"
            fill="#00B95C"
          />
        </g>
        <g filter="url(#ag-brand-filter-4)">
          <path
            d="M-4.92402 8.86746C-2.75421 11.0837 0.982691 10.9438 3.42257 8.55507C5.86246 6.1663 6.08139 2.43321 3.91158 0.216963C1.74177 -1.99928 -1.99513 -1.85942 -4.43501 0.529349C-6.87489 2.91812 -7.09383 6.65122 -4.92402 8.86746Z"
            fill="#00B95C"
          />
        </g>
        <g filter="url(#ag-brand-filter-5)">
          <path
            d="M6.42819 17.2263C7.10197 20.1273 9.91278 21.953 12.7063 21.3042C15.4998 20.6553 17.2182 17.7777 16.5444 14.8767C15.8707 11.9757 13.0599 10.15 10.2663 10.7988C7.47281 11.4477 5.75441 14.3253 6.42819 17.2263Z"
            fill="#3186FF"
          />
        </g>
        <g filter="url(#ag-brand-filter-6)">
          <path
            d="M1.66508 -5.94539C0.254213 -2.80254 1.7978 0.951609 5.11277 2.43973C8.42774 3.92785 12.2588 2.58642 13.6696 -0.556431C15.0805 -3.69928 13.5369 -7.45343 10.222 -8.94155C6.90699 -10.4297 3.07594 -9.08824 1.66508 -5.94539Z"
            fill="#FBBC04"
          />
        </g>
        <g filter="url(#ag-brand-filter-7)">
          <path
            d="M-2.11428 24.3903C-5.52984 23.0496 0.307266 12.0177 1.75874 8.32038C3.21024 4.62304 7.15576 2.71272 10.5713 4.05357C13.9869 5.39442 18.0354 12.7796 16.5838 16.477C15.1323 20.1743 1.30129 25.7311 -2.11428 24.3903Z"
            fill="#3186FF"
          />
        </g>
        <g filter="url(#ag-brand-filter-8)">
          <path
            d="M18.5814 10.6598C17.6669 11.727 15.2806 11.1828 13.2514 9.44417C11.2222 7.70556 10.3185 5.43097 11.2329 4.3637C12.1473 3.29646 14.5336 3.84069 16.5628 5.57928C18.592 7.31789 19.4958 9.59249 18.5814 10.6598Z"
            fill="#749BFF"
          />
        </g>
        <g filter="url(#ag-brand-filter-9)">
          <path
            d="M11.7552 5.22715C15.5162 7.77124 19.8471 7.93838 21.4286 5.60045C23.0101 3.26253 21.2433 -0.695128 17.4823 -3.23922C13.7213 -5.78331 9.39044 -5.95044 7.80896 -3.61252C6.22747 -1.27459 7.99428 2.68306 11.7552 5.22715Z"
            fill="#FC413D"
          />
        </g>
        <g filter="url(#ag-brand-filter-10)">
          <path
            d="M-0.592149 1.08896C-1.5239 3.33663 -1.21959 5.59799 0.0875457 6.13985C1.39468 6.68171 3.20966 5.29888 4.14141 3.05121C5.07316 0.803541 4.76885 -1.45782 3.46171 -1.99968C2.15458 -2.54154 0.339602 -1.15871 -0.592149 1.08896Z"
            fill="#FFEE48"
          />
        </g>
      </g>
      <defs>
        <filter
          id="ag-brand-filter-0"
          x="-2.12817"
          y="-8.35998"
          width="12.8393"
          height="11.383"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="0.722959" />
        </filter>
        <filter
          id="ag-brand-filter-1"
          x="2.75168"
          y="-9.38089"
          width="25.1763"
          height="24.96"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="3.49513" />
        </filter>
        <filter
          id="ag-brand-filter-2"
          x="-14.1669"
          y="-7.50196"
          width="26.5068"
          height="23.6338"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="2.97119" />
        </filter>
        <filter
          id="ag-brand-filter-3"
          x="-14.1669"
          y="-7.50196"
          width="26.5068"
          height="23.6338"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="2.97119" />
        </filter>
        <filter
          id="ag-brand-filter-4"
          x="-12.3607"
          y="-7.29981"
          width="23.709"
          height="23.6846"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="2.97119" />
        </filter>
        <filter
          id="ag-brand-filter-5"
          x="0.634962"
          y="5.02095"
          width="21.7027"
          height="22.0616"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="2.82351" />
        </filter>
        <filter
          id="ag-brand-filter-6"
          x="-3.97547"
          y="-14.6666"
          width="23.2857"
          height="22.8313"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="2.5589" />
        </filter>
        <filter
          id="ag-brand-filter-7"
          x="-7.7407"
          y="-0.945408"
          width="29.1982"
          height="30.1105"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="2.2852" />
        </filter>
        <filter
          id="ag-brand-filter-8"
          x="6.78641"
          y="-0.27231"
          width="16.2415"
          height="15.5681"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="2.04485" />
        </filter>
        <filter
          id="ag-brand-filter-9"
          x="3.77526"
          y="-8.71693"
          width="21.687"
          height="19.4212"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="1.72712" />
        </filter>
        <filter
          id="ag-brand-filter-10"
          x="-5.40727"
          y="-6.39238"
          width="14.3639"
          height="16.9254"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="2.1376" />
        </filter>
      </defs>
    </svg>
  );
}

// No thesvg slug — Go Fiber (thesvg "fiber" is Google Fiber)
function GofiberIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden {...props}>
      <path
        fill="#cbd5e1"
        d="M62.55 47.98c-1.99 0-3.83 1.512-4.122 3.376-.272 1.851 1.19 3.386 3.187 3.386 1.998 0 3.85-1.523 4.098-3.387.247-1.863-1.171-3.374-3.162-3.374zm-25.552 1.954-4.924 29.66h7.166l1.97-11.916h11.788l.984-5.84H42.195l.985-6.082h13.074l.986-5.822H36.998zm31.326 0-4.916 29.658h7.006l.58-3.608h.276c.52 2.057 2.2 3.924 5.558 3.924 4.924 0 9.557-3.851 10.803-11.424 1.31-7.847-2.287-11.423-6.936-11.423-3.518 0-5.82 2.053-6.978 4.095h-.152l1.837-11.222h-7.078zm57.735 7.115c-2.433 0-4.618 1.414-5.936 4.353h-.23l.685-4.054h-6.87l-3.706 22.242h7.08l1.998-12.076c.462-2.65 2.636-4.432 5.14-4.432.884 0 2.086.131 2.737.377L128 57.291a8.417 8.417 0 0 0-1.941-.242zm-24.66.014c-6.705 0-11.804 4.604-12.946 11.495-1.202 7.107 2.359 11.451 9.342 11.461 5.861 0 10.105-2.823 11.682-7.197l-6.457-.187c-.808 1.49-2.405 2.273-4.245 2.273-2.765 0-4.096-1.643-3.648-4.467l.045-.26h14.81l.278-1.767c1.216-7.313-2.548-11.352-8.862-11.352zm-43.83.285L53.866 79.59h7.082l3.7-22.242h-7.08zm43.177 4.826c2.316 0 3.679 1.622 3.317 3.894h-8.14c.508-2.2 2.535-3.894 4.823-3.894zm-23.482.424c2.628 0 3.664 2.29 3.092 5.88-.572 3.59-2.434 5.922-5.04 5.922-2.592 0-3.706-2.326-3.12-5.922.578-3.634 2.475-5.88 5.068-5.88z"
      />
      <path
        fill="#00acd7"
        d="m9.514 57.807-1.85 2.623 24.53-.014.427-2.61H9.514zm-7.612 5.437L0 65.857l31.377-.023.428-2.59H1.902zm16.31 5.436-1.718 2.623 14.066-.01.428-2.613H18.213z"
      />
    </svg>
  );
}

// No thesvg slug — minimal inline fallback
function SqlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// No thesvg slug — minimal inline fallback
function GormIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="monospace">GORM</text>
    </svg>
  );
}

export const techBrandIcons = {
  "python": Python,
  "haskell": Haskell,
  "c": C,
  "java": Java,
  "html5": Html5,
  "css3": Css3,
  "tailwind-css": TailwindCss,
  "javascript": Javascript,
  "typescript": Typescript,
  "php": Php,
  "go": Go,
  "graphql": Graphql,
  "mysql": Mysql,
  "postgresql": PostgresqlIcon,
  "mariadb": Mariadb,
  "sqlite": Sqlite,
  "mongodb": Mongodb,
  "supabase": Supabase,
  "cockroach-labs": CockroachLabs,
  "amazon-web-services": AmazonWebServices,
  "google-cloud": GoogleCloud,
  "microsoft-azure": MicrosoftAzure,
  "firebase": Firebase,
  "vercel": Vercel,
  "heroku": Heroku,
  "netlify": Netlify,
  "docker": Docker,
  "kubernetes": Kubernetes,
  "helm": Helm,
  "terraform": Terraform,
  "datadog": Datadog,
  "apache-kafka": ApacheKafka,
  "git": Git,
  "github": Github,
  "gitlab": Gitlab,
  "bitbucket": Bitbucket,
  "tensorflow": TensorflowIcon,
  "keras": Keras,
  "scikit-learn": ScikitLearn,
  "jest": Jest,
  "postman": Postman,
  "figma": Figma,
  "trello": Trello,
  "slack": Slack,
  "cplusplus": Cplusplus,
  "csharp": Csharp,
  "dart": Dart,
  "dotnet": Dotnet,
  "prisma": Prisma,
  "redis": Redis,
  "visual-studio-code": VisualStudioCode,
  "openai-chatgpt": OpenaiChatgpt,
  "deepseek": Deepseek,
  "claude": Claude,
  "claude-code": ClaudeCode,
  "github-copilot": GithubCopilot,
  "cursor": Cursor,
  "google-gemini": GoogleGemini,
  "codex-openai": CodexOpenai,
  "antigravity-google": AntigravityIcon,
  "nodedotjs": Nodedotjs,
  "express": Express,
  "react": React,
  "nextdotjs": Nextdotjs,
  "vuedotjs": Vuedotjs,
  "codeigniter": Codeigniter,
  "laravel": Laravel,
  "nestjs": Nestjs,
  "reactnative": Reactnative,
  "flutter": Flutter,
  "trpc": Trpc,
  "inertiajs": Inertiajs,
  "typeorm": Typeorm,
  "datocms": Datocms,
  "clockify": Clockify,
  "jupyter": Jupyter,
  "filament": Filament,
  gofiber: GofiberIcon,
  "microsoft-sql-server": MicrosoftSqlServer,
  sql: SqlIcon,
  gorm: GormIcon,
} as Record<string, SvgIconComponent>;
