package com.dsdelivery.dsdelivery.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import com.dsdelivery.dsdelivery.dto.OrderDTO;
import com.dsdelivery.dsdelivery.dto.ProductDTO;
import com.dsdelivery.dsdelivery.entities.Order;
import com.dsdelivery.dsdelivery.entities.OrderStatus;
import com.dsdelivery.dsdelivery.entities.Product;
import com.dsdelivery.dsdelivery.repositories.OrderRepository;
import com.dsdelivery.dsdelivery.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {
    
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = orderRepository.findOrdersWithProducts();
        return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO insert(OrderDTO orderReq){
        Order orderTemp = new Order(null, orderReq.getAddress(), 
            orderReq.getLatitude(), orderReq.getLongitude(), Instant.now(), 
            OrderStatus.PENDING);
        for(ProductDTO currentProdOrder : orderReq.getProducts()){
            Product capturedProduct = productRepository.getOne(currentProdOrder.getId());
            orderTemp.getProducts().add(capturedProduct);
        }
        orderTemp = orderRepository.save(orderTemp);
        return new OrderDTO(orderTemp);

    }
}