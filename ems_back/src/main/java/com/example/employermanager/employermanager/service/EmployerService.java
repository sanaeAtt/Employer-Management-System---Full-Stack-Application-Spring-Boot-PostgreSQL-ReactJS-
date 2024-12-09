package com.example.employermanager.employermanager.service;

import java.util.List;

import com.example.employermanager.employermanager.dto.EmployerDto;

public interface EmployerService {
    public EmployerDto addEmployer(EmployerDto employerdto);
    public EmployerDto getEmployerById(Long id);
    public List<EmployerDto> getAllEmployers();
    public EmployerDto updateEmployer(EmployerDto updateEmployer,long id);
    public void deleteEmployer(long id);
}
