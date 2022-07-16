
create table users 
(
    id int generated always as identity primary key,
    email text unique not null,
    created_at timestamp not null default now()
);

create table cars 
(
    id int generated always as identity primary key,
    brand text not null,
    model text not null,
    year int not null,
    created_at timestamp not null default now()
);

create table user_cars
(
    id int generated always as identity primary key,
    user_id int not null references users(id),
    car_id int not null references cars(id),
    created_at timestamp not null default now()
);