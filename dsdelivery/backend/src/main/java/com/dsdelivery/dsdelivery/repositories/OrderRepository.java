package com.dsdelivery.dsdelivery.repositories;

import com.dsdelivery.dsdelivery.entities.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository <Order, Long> {
    
}