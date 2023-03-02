--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "longUrl" text NOT NULL,
    "shortUrl" character varying(20) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now(),
    count integer DEFAULT 0
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (2, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', '8HYVSo3Jj1', '2023-03-02 16:52:25.970788', 0);
INSERT INTO public.urls VALUES (3, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'lBm6i1ffB1', '2023-03-02 16:52:44.882576', 0);
INSERT INTO public.urls VALUES (4, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'jyX9YA8Y9R', '2023-03-02 17:04:54.885936', 0);
INSERT INTO public.urls VALUES (5, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'CAPPUlkYb2', '2023-03-02 17:05:05.930119', 0);
INSERT INTO public.urls VALUES (6, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'IL4-YLzgfd', '2023-03-02 17:05:49.948179', 0);
INSERT INTO public.urls VALUES (7, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'pCXfGCYSyb', '2023-03-02 17:07:03.565398', 0);
INSERT INTO public.urls VALUES (8, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'nPrkv-XSlj', '2023-03-02 17:07:17.117441', 0);
INSERT INTO public.urls VALUES (9, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'BIwgbqiGVU', '2023-03-02 17:07:47.669468', 0);
INSERT INTO public.urls VALUES (10, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'KDzhtCEkQ_', '2023-03-02 17:09:02.458007', 0);
INSERT INTO public.urls VALUES (11, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', '64R9_7WgdZ', '2023-03-02 17:11:12.873662', 0);
INSERT INTO public.urls VALUES (1, 7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'U2-JLktHx2', '2023-03-02 16:44:23.373087', 7);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'breno A', 'breno@teste.com', '$2b$10$Efc7jvg.gacHQQA.SVCcquovGB39qt9gYPxJ820EIH5F3Ov.s6eMq', '2023-02-28 19:03:45.705301');
INSERT INTO public.users VALUES (2, 'Breno A', 'breno@teste2.com', '$2b$10$e4KRO.NiHIDbNA7gvxmNUeu9IEOAub1Gsp6HH41Dyvi.k7Vf3UwYC', '2023-03-01 13:45:24.117049');
INSERT INTO public.users VALUES (3, 'breno a', 'breno@teste1.com', '$2b$10$X98/XiEXYbW8wm.F./g6zuxF3imMqejJh0KaoNpJZh7WiDo.nwkFa', '2023-03-01 13:46:28.956749');
INSERT INTO public.users VALUES (4, 'breno a', 'breno@teste3.com', '$2b$10$Lf8FLiL5UKYONjvrI438h.Hk5jvuVd2d39K/369KJN21dDvmyOALm', '2023-03-01 13:46:40.152913');
INSERT INTO public.users VALUES (5, 'breno a', 'breno@teste4.com', '$2b$10$ifM1lrv6EahMB5gf4KjIeO1QS9VUpNFs7pIRXxbUQ5Amjpjt5/XLm', '2023-03-01 13:46:43.646205');
INSERT INTO public.users VALUES (6, 'breno a', 'breno@teste5.com', '$2b$10$RoDCBFipdMH0eBNUadA6J.jh/NgPHy0wlcKUStaoURBgNFUVF1tF.', '2023-03-01 14:50:23.103467');
INSERT INTO public.users VALUES (7, 'breno', 'breno@teste7.com', '$2b$10$XN67.RvKoUqxGXlim7oFeurd/kbJNlxHDXd9UDz/vAI28ycnvgDXS', '2023-03-02 15:25:32.08274');


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 11, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

