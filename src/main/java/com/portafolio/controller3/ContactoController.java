/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portafolio.controller3;

/**
 *
 * @author fidel
 */
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ContactoController {

    @GetMapping("/contacto")
    public String contacto() {
        return "contacto"; // Retorna contacto.html
    }

}
