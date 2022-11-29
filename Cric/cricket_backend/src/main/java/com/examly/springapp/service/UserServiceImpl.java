package com.examly.springapp.service;

import com.examly.springapp.model.Role;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.web.dto.UserRegistrationDto;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;


    @Override
    public User save(UserRegistrationDto userRegistrationDto) {
        User user =new User(userRegistrationDto.getEmail(),userRegistrationDto.getUserName(),
                userRegistrationDto.getUserMobileNumber(),userRegistrationDto.getUserPassword()
                ,"ROLE_student");
        try {return userRepository.save(user);}
        catch(Exception e){
            System.out.println("Exception thrown during Saving User : "+e);
            return null;
        }
    }

    @Override
    public HashMap<String,String> loginCheck(UserRegistrationDto dto) {

        try {
            User user=userRepository.findByEmail(dto.getEmail());
            if(dto.getUserPassword().equals(user.getUserPassword())){
                HashMap<String,String> hm = new HashMap<>();
                System.out.println(hm);
                hm.put("role",user.getRoles());
                hm.put("userId",String.valueOf(user.getUserId()));
                hm.put("username",user.getUserName());
                return hm;
            }
            else{
                HashMap<String,String> hm = new HashMap<>();
                hm.put("Error","Email or Password wrong");
                return hm;
            }
        }
        catch(Exception e){
            HashMap<String,String> hm = new HashMap<>();
            hm.put("Error","Email or Password wrong");
            return hm;
        }

    }


}
