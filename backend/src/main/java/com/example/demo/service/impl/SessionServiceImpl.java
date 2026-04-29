package com.example.demo.service.impl;

import com.example.demo.models.Session;
import com.example.demo.repo.ISessionRepo;
import com.example.demo.service.ISessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SessionServiceImpl implements ISessionService {

    @Autowired
    ISessionRepo sessionRepo;

    @Override
    public Session getSessionById(long id) throws Exception {
        if(!sessionRepo.existsById(id)){
            throw new Exception("Session not found");
        }

        Session session = sessionRepo.findById(id).get();

        return session;
    }
}
