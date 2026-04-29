package com.example.demo.service;

import com.example.demo.models.Session;

public interface ISessionService {
    public Session getSessionById(long id) throws Exception;

}
