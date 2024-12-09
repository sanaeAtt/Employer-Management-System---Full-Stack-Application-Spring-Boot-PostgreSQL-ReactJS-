package com.example.employermanager.employermanager.mapper;

import com.example.employermanager.employermanager.dto.EmployerDto;
import com.example.employermanager.employermanager.entity.Employer;


//!to map betwn employer Entity && Emplyer dto
public class EmployerMapper {
    
    public static EmployerDto mapToEmployerDto(Employer employer){
        return new EmployerDto(
            employer.getId(),
            employer.getFirstName(),
           employer.getLastName(),
            employer.getEmail(),
            employer.getAge()
        );
    }

    public static Employer mapToEmployer(EmployerDto employerdto){
        return new Employer(
            employerdto.getId(),
            employerdto.getFirstName(),
            employerdto.getLastName(),
            employerdto.getEmail(),
            employerdto.getAge()
        );
    }
}
