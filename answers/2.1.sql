create table `users` (
    `id` varchar(10) not null,
    `birth` varchar(10) not null, -- EX) 20010701
    `valid` int not null default 0,
    primary key (`id`)
)

create table `vaccines` (
    `id` varchar(10) not null,
    `product_name` varchar(20) not null,
    `max` int not null,
    primary key (`id`)
)

create table `status` (
    `id` varchar(10) not null,
    `userId` varchar(10) not null,
    `date` varchar(10) not null,
    `count` int not null,
    primary key (`id`),
    foreign key (`userId`) references `users`(`id`)
)