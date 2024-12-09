package com.example.employermanager.employermanager.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


//!to Transfer the data between client && srver 
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployerDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private int age;
}
