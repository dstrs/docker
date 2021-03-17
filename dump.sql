--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

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
-- Name: boxoffice; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.boxoffice (
    movie_id integer,
    rating double precision,
    domestic_sales integer,
    international_sales integer
);


ALTER TABLE public.boxoffice OWNER TO alex;

--
-- Data for Name: boxoffice; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.boxoffice (movie_id, rating, domestic_sales, international_sales) FROM stdin;
5	8.2	380843261	555900000
14	7.4	268492764	475066843
8	8	206445654	417277164
12	6.4	191452396	368400000
3	7.9	245852179	239163000
6	8	261441092	370001000
9	8.5	223808164	297503696
11	8.4	415004880	648167031
1	8.3	191796233	170162503
7	7.2	244082982	217900167
10	8.3	293004164	438338580
4	8.1	289916256	272900000
2	7.2	162798565	200600000
13	7.2	237283207	301700000
\.


--
-- PostgreSQL database dump complete
--

