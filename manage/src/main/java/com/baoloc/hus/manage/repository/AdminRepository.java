package com.baoloc.hus.manage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baoloc.hus.manage.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>
{
}
