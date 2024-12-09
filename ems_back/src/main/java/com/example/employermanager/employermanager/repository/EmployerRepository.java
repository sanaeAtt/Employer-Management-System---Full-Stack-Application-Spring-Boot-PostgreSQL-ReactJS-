package com.example.employermanager.employermanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employermanager.employermanager.entity.Employer;

public interface EmployerRepository extends JpaRepository<Employer,Long> {
    
}
