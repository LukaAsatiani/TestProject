-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 26, 2021 at 03:44 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `table_app`
--

-- --------------------------------------------------------

--
-- Table structure for test `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `count` int(11) NOT NULL,
  `distance` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tests
--

--
-- Indexes for test `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tests
--

--
-- AUTO_INCREMENT for test `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- INSERT INTO `test`(`title`, `count`, `distance`, `date`) 
--   VALUES 
--     ('fgdfgs', '300', '100', '2028-11-19 03:10:07'),
--     ('DTGDfgdfgs', '323', '14', '2048-06-19 03:14:07'),
--     ('DGDfgdfgs', '234', '14', '2008-06-19 02:14:07'),
--     ('GDFDfgdfgs', '0', '1', '2038-02-19 03:14:17'),
--     ('DfgdfgsDS', '3', '134', '2038-01-10 03:14:07'),
--     ('TYUDfgSDdfgs', '783', '19', '2038-01-19 03:14:07'),
--     ('UIYDfgdfDFgs', '33', '14', '2037-05-17 02:10:07'),
--     ('TUtDfgdfSDFgs', '3299', '12', '2038-01-09 03:14:07'),
--     ('SDFDfgdfgs', '32', '12', '2038-01-19 03:14:07')
