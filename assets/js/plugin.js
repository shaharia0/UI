/*================================================================================
  Item Name: Materialize - Material Design Admin Template
  Version: 2.1
  Author: GeeksLabs
  Author URL: http://www.themeforest.net/user/geekslabs
================================================================================*/


$(document).ready(function() {
  $('.tooltipped').tooltip();
  $('.sidenav').sidenav();
  $('select').formSelect();
  $('.modal').modal();
  $('.dropdown-trigger').dropdown();
  $('.tabs').tabs();
  

    "use strict";
  
    var window_width = $(window).width();
  
    /*Preloader*/
    $(window).load(function() {
      setTimeout(function() {
        $('body').addClass('loaded');      
      }, 200);
    });  
  
    
    // Search class for focus
    $('.header-search-input').focus(
    function(){
        $(this).parent('div').addClass('header-search-wrapper-focus');
    }).blur(
    function(){
        $(this).parent('div').removeClass('header-search-wrapper-focus');
    });  
  
    // Check first if any of the task is checked
    $('#task-card input:checkbox').each(function() {
      checkbox_check(this);
    });
  
    // Task check box
    $('#task-card input:checkbox').change(function() {
      checkbox_check(this);
    });
  
    // Check Uncheck function
    function checkbox_check(el){
        if (!$(el).is(':checked')) {
            $(el).next().css('text-decoration', 'none'); // or addClass            
        } else {
            $(el).next().css('text-decoration', 'line-through'); //or addClass
        }    
    }
  
    /*----------------------
    * Plugin initialization
    ------------------------*/
  
    // Materialize Dropdown
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 125,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on click
      alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    });
  
    // Materialize Tabs
    $('.tab-demo').show().tabs();
    $('.tab-demo-active').show().tabs();

    // Materialize scrollSpy
    $('.scrollspy').scrollSpy();
  
    // Materialize tooltip
    $('.tooltipped').tooltip({
      delay: 50
    });
  
    // Materialize sideNav  


    // HORIZONTAL MENU (Layout 03)
    $('.dropdown-menu').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true // Displays dropdown below the button
      });
  
    
    // Fullscreen
    function toggleFullScreen() {
      if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        }
        else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        }
        else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      }
      else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        }
        else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }
  
    $('.toggle-fullscreen').click(function() {
      toggleFullScreen();
    });
  
    // Toggle Flow Text
    var toggleFlowTextButton = $('#flow-toggle')
    toggleFlowTextButton.click(function() {
      $('#flow-text-demo').children('p').each(function() {
        $(this).toggleClass('flow-text');
      })
    });
    
    
    //Toggle Containers on page
    var toggleContainersButton = $('#container-toggle-button');
    toggleContainersButton.click(function() {
      $('body .browser-window .container, .had-container').each(function() {
        $(this).toggleClass('had-container');
        $(this).toggleClass('container');
        if ($(this).hasClass('container')) {
          toggleContainersButton.text("Turn off Containers");
        }
        else {
          toggleContainersButton.text("Turn on Containers");
        }
      });
    });
  
    // Detect touch screen and enable scrollbar if necessary
    function is_touch_device() {
      try {
        document.createEvent("TouchEvent");
        return true;
      }
      catch (e) {
        return false;
      }
    }
    if (is_touch_device()) {
      $('#nav-mobile').css({
        overflow: 'auto'
      })
    }
  
  }); // end of document ready