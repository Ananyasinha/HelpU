-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2017 at 10:08 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `helpu`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `product` varchar(255) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `product`, `time`) VALUES
(1, 'DELL', '{\"title\":\"DELL\",\"size\":\"M\",\"price\":\"30000\",\"mrp\":\"29000\",\"image\":\"dell.jpg\"}', '2017-08-28 01:28:54'),
(2, 'iphone', '{\"title\":\"iphone\",\"size\":\"S\",\"price\":\"25000\",\"mrp\":\"24000\",\"image\":\"iphone.jpg\"}', '2017-08-28 01:30:11'),
(3, 'iPhone7', '{\"title\":\"iPhone7\",\"size\":\"M\",\"price\":\"38000\",\"mrp\":\"40000\",\"image\":\"iphone7.jpg\"}', '2017-08-28 01:33:40'),
(4, 'macBook', '{\"title\":\"macBook\",\"size\":\"L\",\"price\":\"56000\",\"mrp\":\"60000\",\"image\":\"mac.jpg\"}', '2017-08-28 01:34:58'),
(5, 'Tablet', '{\"title\":\"Tablet\",\"size\":\"M\",\"price\":\"35000\",\"mrp\":\"35000\",\"image\":\"tablet.jpg\"}', '2017-08-28 01:35:45'),
(6, 'Beats Headphone', '{\"title\":\"Beats Headphone\",\"size\":\"M\",\"price\":\"1000\",\"mrp\":\"1000\",\"image\":\"beats.jpg\"}', '2017-08-28 01:36:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
