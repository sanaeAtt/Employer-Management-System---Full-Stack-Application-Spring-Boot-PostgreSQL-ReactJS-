package com.example.employermanager.employermanager.service.impl;

import java.util.List;
    import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.employermanager.employermanager.dto.EmployerDto;
import com.example.employermanager.employermanager.entity.Employer;
import com.example.employermanager.employermanager.exception.ResourceNotFoundException;
import com.example.employermanager.employermanager.mapper.EmployerMapper;
import com.example.employermanager.employermanager.repository.EmployerRepository;
import com.example.employermanager.employermanager.service.EmployerService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class EmployerServiceImpl implements EmployerService {

    private final EmployerRepository employerRepository;

    @Override
    public EmployerDto addEmployer(EmployerDto employerdto) {
        Employer employer = EmployerMapper.mapToEmployer(employerdto);
        Employer savedEmployer = employerRepository.save(employer);
        return EmployerMapper.mapToEmployerDto(savedEmployer);
    }

    @Override
    public EmployerDto getEmployerById(Long id) {
        Employer employer = employerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer with the id : " + id + " not founded :)"));
        return EmployerMapper.mapToEmployerDto(employer);
    }

    @Override
    public List<EmployerDto> getAllEmployers() {
        List<Employer> employers = employerRepository.findAll();
        return employers.stream().map((employer) -> EmployerMapper.mapToEmployerDto(employer))
                .collect(Collectors.toList());
    }

    @Override
    public EmployerDto updateEmployer(EmployerDto updateEmployer,long id) {
       
        Employer employer = employerRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not founded :)"));
        employer.setFirstName(updateEmployer.getFirstName());
        employer.setLastName(updateEmployer.getLastName());
        employer.setEmail(updateEmployer.getEmail());
        employer.setAge(updateEmployer.getAge());

        employerRepository.save(employer);
       return EmployerMapper.mapToEmployerDto(employer);
    }

    @Override
    public void deleteEmployer(long id) {
        employerRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employer not founded to delete :)"));
        employerRepository.deleteById(id);
        
    }

}
