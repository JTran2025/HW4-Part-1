// /*
// File: multtable.js
// GUI Assignment: HW4 Using the jQuery Plugin/UI with Your Dynamic Table
// Part 1: Validation Plugin
// Julian Tran, UMass Lowell Computer Science, Julian_Tran@student.uml.edu
// Copyright (c) 2024 by Julian. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// Created on November 25, 2024

// This javascript file takes the values from the multtable.html file. 
// It uses the jQuery Validation Plugin to handle errors for invalid inputs,
// out of range values, and prevents the page from submitting without the
// correct inputs. It uses the jQuery library to create and call 
// a function to generate the table with the four values as the parameters. 
// The function creates a dynamic table with row and column headers the
// appropriate results from the multiplicand and the multiplier in each cell.
// */

$(document).ready(function() {
    // Checks if current value is greater than or equal to value of the specified element
    $.validator.addMethod("greaterThanEqualTo", function(value, element, params) {
        return this.optional(element) || value === "" || $(params).val() === "" ||
            parseFloat(value) >= parseFloat($(params).val());
    }, "Must be greater than or equal to {0}.");

    // Checks if current value is less than or equal to value of the specified element
    $.validator.addMethod("lessThanEqualTo", function(value, element, params) {
        return this.optional(element) || value === "" || $(params).val() === "" ||
            parseFloat(value) <= parseFloat($(params).val());
    }, "Must be less than or equal to {0}.");

    $('#numberForm').validate({
        rules: {
            colMin: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                lessThanEqualTo: "#colMax"
            },
            colMax: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                greaterThanEqualTo: "#colMin"
            },
            rowMin: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                lessThanEqualTo: "#rowMax"
            },
            rowMax: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                greaterThanEqualTo: "#rowMin"
            }
        },
        messages: {
            colMin: {
                required: "Please enter a value.",
                number: "Please enter a valid number.",
                min: "Minimum Column Value must be at least -50.",
                max: "Minimum Column Value must be less than 50.",
                lessThanEqualTo: "Minimum Column Value must be less than Maximum Column Value."
            },
            colMax: {
                required: "Please enter a value.",
                number: "Please enter a valid number.",
                min: "Maximum Column Value must be at least -50.",
                max: "Maximum Column Value must be less than 50.",
                greaterThanEqualTo: "Maximum Column Value must be greater than Minimum Column Value."
            },
            rowMin: {
                required: "Please enter a value.",
                number: "Please enter a valid number.",
                min: "Minimum Row Value must be at least -50.",
                max: "Minimum Row Value must be less than 50.",
                lessThanEqualTo: "Minimum Row Value must be less than Maximum Row Value."
            },
            rowMax: {
                required: "Please enter a value.",
                number: "Please enter a valid number.",
                min: "Maximum Row Value must be at least -50.",
                max: "Maximum Row Value must be less than 50.",
                greaterThanEqualTo: "Maximum Row Value must be greater than Minimum Row Value." 
            }
        },
        // Ensure that each input field is revalidated as soon as the user types in or changes the input
        onkeyup: function(element) {
            $(element).valid();
        },
        onchange: function(element) {
            $(element).valid();
        },
        submitHandler: function(form) {
            generateMultiplicationTable($('#colMin').val(), $('#colMax').val(), $('#rowMin').val(), $('#rowMax').val());
        }
    });

    function generateMultiplicationTable(minCol, maxCol, minRow, maxRow) {
        var tableContainer = $('#tableContainer');
        tableContainer.html(''); // Clear previous table

        // Create table element
        var table = $('<table></table>');
        var tbody = $('<tbody></tbody>');

        // Create header row for columns
        var colHeaders = $('<tr></tr>');
        var emptyHeader = $('<th></th>'); // Empty top-left cell
        colHeaders.append(emptyHeader);

        for (var col = minCol; col <= maxCol; col++) {
            var th = $('<th></th>').text(col);
            colHeaders.append(th);
        }
        tbody.append(colHeaders);

        // Generate table rows and cells
        for (var row = minRow; row <= maxRow; row++) {
            var tr = $('<tr></tr>');

            // Create header cell for row
            var rowHeader = $('<th></th>').text(row);
            tr.append(rowHeader);

            for (var col = minCol; col <= maxCol; col++) {
                var td = $('<td></td>').text(row * col);
                tr.append(td);
            }
            tbody.append(tr);
        }

        table.append(tbody);
        tableContainer.append(table);
    }
});
