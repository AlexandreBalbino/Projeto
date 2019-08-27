package com.backend.backend.controller;

import com.backend.backend.model.Response;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpResponse;

@RestController
public class ComunicaoController {

    @RequestMapping(value = "/",  method = RequestMethod.GET, produces = "application/json")
    public Response index(){
        Response response = new Response();
        response.index = 1;
        response.conteudo = 1;
        return response;
    }

}
