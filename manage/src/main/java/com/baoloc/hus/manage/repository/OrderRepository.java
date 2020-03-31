package com.baoloc.hus.manage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baoloc.hus.manage.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long>
{
}
