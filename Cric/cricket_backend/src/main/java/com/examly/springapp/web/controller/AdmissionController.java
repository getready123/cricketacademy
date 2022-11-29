package com.examly.springapp.web.controller;

import com.examly.springapp.model.Admission;
import com.examly.springapp.service.AdmissionService;
import com.examly.springapp.web.dto.AdmissionAddressDto;
import com.examly.springapp.web.dto.AdmissionSaveDto;
import com.examly.springapp.web.dto.GetAllAdmissionRequestDto;
import com.examly.springapp.web.dto.GetAllAppliedAdmissionDto;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class AdmissionController {

    @Autowired
    AdmissionService admissionService;



    @PostMapping("/user/enroll")
    @ResponseBody
    public String enroll(@RequestBody AdmissionAddressDto admissionSaveDto){
        admissionService.saveAdmission(admissionSaveDto);
        return "Applied for Admission";
    }

    @GetMapping("/admin/getAllAdmissionRequests")
    @ResponseBody
    public List<GetAllAdmissionRequestDto> getAdmissionRequests(){
        return admissionService.getAllAdmissionRequests();
    }

    @GetMapping("/admin/acceptAdmission")
    @ResponseBody
    public String acceptAdmission(@RequestParam("admissionId")long admissionId){
        admissionService.acceptAdmission(admissionId);
        return "Admission Accepted";

    }

    @GetMapping("/admin/denyAdmission")
    @ResponseBody
    public String denyAdmission(@RequestParam("admissionId")long admissionId){
        admissionService.denyAdmission(admissionId);
        return "Admission Denied";

    }

    @GetMapping("admin/getAllAcceptedAdmission")
    @ResponseBody
    public List<GetAllAdmissionRequestDto> getAllAcceptedAdmission(){
        return admissionService.getAllAcceptedAdmission();
    }

    @GetMapping("admin/getAllDeniedAdmission")
    @ResponseBody
    public List<GetAllAdmissionRequestDto> getAllDeniedAdmission(){
        return admissionService.getAllDeniedAdmission();
    }

    @GetMapping("/admin/getAdmission")
    @ResponseBody
    public AdmissionAddressDto getAdmission(@RequestParam("admissionId")long admissionId){

        return admissionService.getAdmissionById(admissionId);

    }

    @PutMapping("/admin/editAdmission")
    @ResponseBody
    public String editAdmission(@RequestBody AdmissionAddressDto dto, @RequestParam("admissionId")long id){
        admissionService.editAdmission(dto,id);
        return "Admission Edited";
    }

    @GetMapping("/user/getAllAppliedAdmissionByStudent")
    @ResponseBody
    public List<GetAllAppliedAdmissionDto> getAllAppliedAdmissionByStudent(@RequestParam("userId") long userId){
        return admissionService.getAllAppliedCourses(userId);

    }

    @DeleteMapping("/admin/deleteAdmission")
    @ResponseBody
    public String deleteAdmission(@RequestParam("admissionId")long id){
        return admissionService.deleteAdmission(id);
    }

    @GetMapping("/user/acceptAdmissionByStudent")
    @ResponseBody
    public String acceptAdmissionByStudent(@RequestParam("admissionId") long admissionId, @RequestParam("userId") long userId){
             return admissionService.acceptAdmissionByStudent(admissionId,userId);
    }

    @GetMapping("/user/denyAdmissionByStudent")
    @ResponseBody
    public String denyAdmissionByStudent(@RequestParam("admissionId") long admissionId){
          return admissionService.denyAdmissionByStudent(admissionId);
    }

    @GetMapping("/user/getAcceptedAdmissionByStudent")
    @ResponseBody
    public GetAllAdmissionRequestDto getAcceptedAdmissionByStudent(@RequestParam("userId") long userId){
        return admissionService.getAcceptedAdmissionByStudent(userId);
    }

    @GetMapping("/user/getDeniedAdmissionByStudent")
    @ResponseBody
    public List<GetAllAdmissionRequestDto> getDeniedAdmissionByStudent(@RequestParam("userId") long userId){
        return admissionService.getDeniedAdmissionByStudent(userId);
    }
}
