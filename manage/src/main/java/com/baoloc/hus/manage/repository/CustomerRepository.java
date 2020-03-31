package com.baoloc.hus.manage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baoloc.hus.manage.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>
{
}
