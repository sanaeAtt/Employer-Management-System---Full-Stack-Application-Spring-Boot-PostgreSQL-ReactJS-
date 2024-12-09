package com.example.employermanager.employermanager.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employermanager.employermanager.dto.EmployerDto;
import com.example.employermanager.employermanager.service.EmployerService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;



@CrossOrigin("*")
@RestController
@RequestMapping("api/employers")
@AllArgsConstructor
public class EmployerController {

    EmployerService employerService;

    // *api add Emplyer */
    @PostMapping
    public ResponseEntity<EmployerDto> addEmployer(@RequestBody EmployerDto employerdto) {
        EmployerDto savedEmployer = employerService.addEmployer(employerdto);
        return new ResponseEntity<>(savedEmployer, HttpStatus.CREATED);
    }

    // *api get Emplyer */
    @GetMapping("/{id}")
    public ResponseEntity<EmployerDto> getEmployer(@PathVariable Long id){
        EmployerDto employerdto = employerService.getEmployerById(id);
        // return new ResponseEntity<>(employerdto,HttpStatus.ACCEPTED); 
        return  ResponseEntity.ok(employerdto);
    }
    
    // *api get all amployrs */
    @GetMapping
    public ResponseEntity<List<EmployerDto>> getAllEmployers(){
        List<EmployerDto> employerdtos =employerService.getAllEmployers();
        return ResponseEntity.ok(employerdtos);
    }


    @PutMapping("/{id}")
    public ResponseEntity<EmployerDto> updateEmployer(@PathVariable long id, @RequestBody EmployerDto employerDto) {
        EmployerDto updaEmployerDto = employerService.updateEmployer(employerDto,id);
        
        return ResponseEntity.ok(updaEmployerDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEmployer(@PathVariable Long id) {
        employerService.deleteEmployer(id);
        // return ResponseEntity.ok().build();
        return ResponseEntity.ok("Emplyer has deleted :)");
    }
}
