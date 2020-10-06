package de.kmtech.brunhilde.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Controller to route all HTML-request to the index site except API-calls.
 * 
 * @author Kilian Mauer
 *
 */
@Controller
public class HomeController {
    @GetMapping(value = { "/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}" })
    public String showHome(Model model) {
        return "index";
    }
}