require 'bundler'
Bundler.setup

require 'toto'
require 'i18n'

# Rack config
use Rack::Static, :urls => ['/css', '/js', '/images', '/favicon.ico'], :root => 'public'
use Rack::CommonLogger

if ENV['RACK_ENV'] == 'development'
  use Rack::ShowExceptions
end

Encoding.default_external = Encoding::UTF_8
I18n.load_path += Dir.glob("config/locales/*.yml")
I18n.locale = :es

toto = Toto::Server.new do
  #
  # Add your settings here
  # set [:setting], [value]
  set :url,       "http://thewritermoustache.com/"
  set :author,    "Tute"                                      # blog author
  # set :title,     Dir.pwd.split('/').last                   # site title
  # set :root,      "index"                                   # page to load on /
  set :markdown,  :smart                                    # use markdown + smart-mode
  set :disqus,    "thewritermoustache"                        # disqus id, or false
  # set :summary,   :max => 150, :delim => /~/                # length of article summary and delimiter
  # set :ext,       'txt'                                     # file extension for articles
  # set :cache,      28800                                    # cache duration, in seconds

 #  set :date, lambda {|now| now.strftime("%B #{now.day.ordinal} %Y") } #I18n.l now
    set :date, lambda {|now| I18n.localize(now, :format => :custom) }

   set :error     do |code|                              # The HTML for your error page
     #ERB.new(File.read("#{path}/#{page}.rhtml")).result(ctx)
     "<font style='font-size:300%'> 404, wrong page(#{code})</font>"
   end
end

run toto


