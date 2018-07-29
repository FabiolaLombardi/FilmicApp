CREATE SEQUENCE users_id_users_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE users_id_users_seq
    OWNER TO postgres;
	
CREATE SEQUENCE type_users_id_type_users_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE type_users_id_type_users_seq
    OWNER TO postgres;

CREATE SEQUENCE category_id_category_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE category_id_category_seq
    OWNER TO postgres;

CREATE SEQUENCE bank_id_bank_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE bank_id_bank_seq
    OWNER TO postgres;


CREATE SEQUENCE status_id_status_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE status_id_status_seq
    OWNER TO postgres;

CREATE SEQUENCE payment_bank_id_payment_bank_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE payment_bank_id_payment_bank_seq
    OWNER TO postgres;

CREATE SEQUENCE product_id_product_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE product_id_product_seq
    OWNER TO postgres;

CREATE SEQUENCE users_payment_id_users_payment_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE users_payment_id_users_payment_seq
    OWNER TO postgres;

CREATE SEQUENCE cart_id_cart_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE cart_id_cart_seq
    OWNER TO postgres;

CREATE SEQUENCE cart_product_id_cart_product_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE cart_product_id_cart_product_seq
    OWNER TO postgres;






CREATE TABLE type_users (
                id_type_users INTEGER NOT NULL DEFAULT nextval('type_users_id_type_users_seq'::regclass),
                des_type_users VARCHAR NOT NULL,
                CONSTRAINT type_users_pk PRIMARY KEY (id_type_users)
);


CREATE TABLE category (
                id_category INTEGER NOT NULL DEFAULT nextval('category_id_category_seq'::regclass),
                des_category VARCHAR NOT NULL,
                CONSTRAINT category_pk PRIMARY KEY (id_category)
);


CREATE TABLE bank (
                id_bank INTEGER NOT NULL DEFAULT nextval('bank_id_bank_seq'::regclass),
                des_bank VARCHAR NOT NULL,
                CONSTRAINT bank_pk PRIMARY KEY (id_bank)
);


CREATE TABLE status (
                id_status INTEGER NOT NULL DEFAULT nextval('status_id_status_seq'::regclass),
                des_status VARCHAR NOT NULL,
                CONSTRAINT status_pk PRIMARY KEY (id_status)
);


CREATE TABLE payment_bank (
                id_payment INTEGER NOT NULL DEFAULT nextval('payment_bank_id_payment_bank_seq'::regclass),
                id_bank INTEGER NOT NULL,
                num_payment INTEGER NOT NULL,
                secret_payment INTEGER NOT NULL,
                name_payment VARCHAR NOT NULL,
                CONSTRAINT payment_bank_pk PRIMARY KEY (id_payment)
);


CREATE TABLE product (
                id_product INTEGER NOT NULL DEFAULT nextval('product_id_product_seq'::regclass),
                id_category INTEGER NOT NULL,
                title_product VARCHAR NOT NULL,
                des_product VARCHAR NOT NULL,
                price_product FLOAT NOT NULL,
                img_product VARCHAR NOT NULL,
                CONSTRAINT product_pk PRIMARY KEY (id_product)
);


CREATE TABLE users (
                id_users INTEGER NOT NULL DEFAULT nextval('users_id_users_seq'::regclass),
                id_type_users INTEGER NOT NULL,
                email_users VARCHAR NOT NULL,
                name_users VARCHAR NOT NULL,
                last_users VARCHAR NOT NULL,
                pass_users VARCHAR NOT NULL,
                CONSTRAINT users_pk PRIMARY KEY (id_users)
);


CREATE TABLE users_payment (
                id_users_payment INTEGER NOT NULL DEFAULT nextval('users_payment_id_users_payment_seq'::regclass),
                id_users INTEGER NOT NULL,
                id_payment INTEGER NOT NULL,
                CONSTRAINT users_payment_pk PRIMARY KEY (id_users_payment)
);


CREATE TABLE cart (
                id_cart INTEGER NOT NULL DEFAULT nextval('cart_id_cart_seq'::regclass),
                id_users INTEGER NOT NULL,
                CONSTRAINT cart_pk PRIMARY KEY (id_cart)
);


CREATE TABLE cart_product (
                id_cart_product INTEGER NOT NULL DEFAULT nextval('cart_product_id_cart_product_seq'::regclass),
                id_cart INTEGER NOT NULL,
                id_product INTEGER NOT NULL,
                id_status INTEGER NOT NULL,
                quantity INTEGER NOT NULL,
                date TIMESTAMP NOT NULL,
                CONSTRAINT cart_product_pk PRIMARY KEY (id_cart_product)
);


ALTER TABLE users ADD CONSTRAINT type_users_users_fk
FOREIGN KEY (id_type_users)
REFERENCES type_users (id_type_users)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE product ADD CONSTRAINT category_product_fk
FOREIGN KEY (id_category)
REFERENCES category (id_category)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE payment_bank ADD CONSTRAINT bank_payment_method_fk
FOREIGN KEY (id_bank)
REFERENCES bank (id_bank)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE cart_product ADD CONSTRAINT status_cart_product_fk
FOREIGN KEY (id_status)
REFERENCES status (id_status)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE users_payment ADD CONSTRAINT payment_method_users_payment_fk
FOREIGN KEY (id_payment)
REFERENCES payment_bank (id_payment)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE cart_product ADD CONSTRAINT product_cart_product_fk
FOREIGN KEY (id_product)
REFERENCES product (id_product)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE cart ADD CONSTRAINT users_cart_fk
FOREIGN KEY (id_users)
REFERENCES users (id_users)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE users_payment ADD CONSTRAINT users_users_payment_fk
FOREIGN KEY (id_users)
REFERENCES users (id_users)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE cart_product ADD CONSTRAINT cart_cart_product_fk
FOREIGN KEY (id_cart)
REFERENCES cart (id_cart)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
