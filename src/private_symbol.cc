#include <node.h>

using namespace v8;

static void Create(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  HandleScope scope(isolate);

  Local<Private> symbol = Private::New(isolate, args[0].As<String>());
  args.GetReturnValue().Set(*reinterpret_cast<v8::Handle<Value>*>(&symbol));
}

static void SymbolFor(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  HandleScope scope(isolate);

  Local<Private> symbol = Private::ForApi(isolate, args[0].As<String>());
  args.GetReturnValue().Set(*reinterpret_cast<v8::Handle<Value>*>(&symbol));
}

static void Init(Handle<Object> target) {
  NODE_SET_METHOD(target, "Create", Create);
  NODE_SET_METHOD(target, "SymbolFor", SymbolFor);
}

NODE_MODULE(private_symbol, Init)
