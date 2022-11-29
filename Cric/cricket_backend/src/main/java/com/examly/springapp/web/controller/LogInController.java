package com.examly.springapp.web.controller;

import com.examly.springapp.service.UserService;
import com.examly.springapp.web.dto.UserRegistrationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
public class LogInController {

    @Autowired
    UserService userService;

    @PostMapping("/admin/login")
    @ResponseBody
    public HashMap<String, String> adminLogin(@RequestBody UserRegistrationDto dto){

        return userService.loginCheck(dto) ;
    }

    @PostMapping("/user/login")
    @ResponseBody
    public HashMap<String, String> userLogin(@RequestBody UserRegistrationDto dto){
        return userService.loginCheck(dto);
    }
}
