# Mail Disguise

Backdrop CMS filter module to disguise email addresses in content to make it harder for mail harvester bots.
Works for both, mailto links and plain text email addresses.

## Installation

Install this module using the official Backdrop CMS instructions at https://backdropcms.org/guide/modules

Then go to /admin/config/content/formats and enable the filter "Mail address disguise" for the text formats of your choice.

## Similar modules

* https://github.com/backdrop-contrib/invisimail

If web accessibility has priority, choose Invisimail. If you want better protection for mailto links, especially if you plan to prefill mail subject or body via url parameters (example: `?subject=Hello%20World`), choose Mail Disguise.

## Current maintainers

* Indigoxela (https://github.com/indigoxela)

## License

This project is GPL v2 software. See the LICENSE.txt file in this directory for complete text.
